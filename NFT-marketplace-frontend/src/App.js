import React from "react";
import { ethers } from "ethers";
import AuctionArtifact from "./artifacts/Auction.json";
import AuctionManagerArtifact from "./artifacts/AuctionManager.json";
import NFTArtifact from "./artifacts/ButterflyToken.json";
const NFT_ADDRESS = "0x95acc79d5f344d8795f592298B51399a0Adc7E7A"; // NFT contract address
const AUCTIONMANAGER_ADDRESS = "0xCAb903cbf2093356F97503DdFeCB9ccA7bc7330F"; // AuctionManager contract address
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auctions: [], // Auctions to display
      newAuction: {
        // newAuction is a state variable for the form
        startPrice: null,
        endTime: null,
        tokenId: null,
        minIncrement: null,
        directBuyPrice: null,
      },
      myItems: [],
    };
  }
  async init() {
    if (window.ethereum) {
      await window.ethereum.enable(); // Enable the Ethereum client
      this.provider = new ethers.providers.Web3Provider(window.ethereum); // A connection to the Ethereum network
      this.signer = this.provider.getSigner(); // Holds your private key and can sign things
      this.setState({ currentAddress: await this.signer.getAddress() }); // Set the current address
      // Step 5 - insert code here to create auction manager and NFT contract objects
      this._auctionManager = new ethers.Contract(
    AUCTIONMANAGER_ADDRESS,
    AuctionManagerArtifact.abi,
    this.signer
   );

this._nft = new ethers.Contract(
    NFT_ADDRESS,
    NFTArtifact.abi,
    this.signer
   );
      this.getItems();
      this.getAuctions();
    } else {
      alert("No wallet detected");
    }
  }
  async getItems() {
    // Step 6 - insert code here to get NFTs
    const walletAddress = await this.signer.getAddress(); 
let tokenOwner = null; 
let counter = 0; 
const NFTIds = []; 
do { 
 try { 
  tokenOwner = await this._nft.ownerOf(counter); 
  if (tokenOwner === walletAddress) { 
   NFTIds.push(counter); 
  } 
  counter++; 
 } catch (error) { 
  tokenOwner = null;  } 
 
} while (tokenOwner != null); 
this.setState({ myItems: NFTIds });
  }
  async createAuction() {
    if (
      !this.state.newAuction.minIncrement ||
      !this.state.newAuction.directBuyPrice ||
      !this.state.newAuction.startPrice ||
      !this.state.newAuction.endTime ||
      !this.state.newAuction.tokenId
    ) {
      console.log(this.state.newAuction);
      return alert("Fill all the fields");
    }
    // Step 7 - insert code here to create an auction
    let { hash: allowance_hash } = await this._nft.approve( 
 	AUCTIONMANAGER_ADDRESS, 
 	this.state.newAuction.tokenId 
	);  
console.log("Approve Transaction sent! Hash:", allowance_hash); 
await this.provider.waitForTransaction(allowance_hash);  console.log("Transaction mined!"); 
  
let { hash } = await this._auctionManager.createAuction( 
 	this.state.newAuction.endTime * 60,  
 	ethers.utils.parseEther(this.state.newAuction.minIncrement.toString()),  
 	ethers.utils.parseEther(this.state.newAuction.directBuyPrice.toString()),  
 	ethers.utils.parseEther(this.state.newAuction.startPrice.toString()),     
 	NFT_ADDRESS,  
 	this.state.newAuction.tokenId  
	); 
console.log("Transaction sent! Hash:", hash); 
await this.provider.waitForTransaction(hash);   
console.log("Transaction mined!"); 
alert(`Transaction sent! Hash: ${hash}`);
  }
  async getAuctions() {
    // Step 8 - insert code here to get auctions
    let auctionsAddresses = await this._auctionManager.getAuctions();  
let auctions = await this._auctionManager.getAuctionInfo(auctionsAddresses);  
  
let new_auctions = []; 

for (let i = 0; i < auctions.endTime.length; i++) { 
 	let endTime = auctions.endTime[i].toNumber(); 
 	let tokenId = auctions.tokenIds[i].toNumber(); 
 	let auctionState = auctions.auctionState[i].toNumber(); 
  
 	let startPrice = ethers.utils.formatEther(auctions.startPrice[i]); 
 	let directBuyPrice = ethers.utils.formatEther(auctions.directBuy[i]); 
 	let highestBid = ethers.utils.formatEther(auctions.highestBid[i]); 
  
 	let owner = auctions.owner[i]; 
  
 	let newAuction = { 
  	endTime: endTime, 
  	startPrice: startPrice, 
  	owner: owner, 
  	directBuyPrice: directBuyPrice, 
  	tokenId: tokenId, 
  	highestBid: highestBid, 
  	auctionState: auctionState, 
  	auctionAddress: auctionsAddresses[i], 
 	}; 
 	new_auctions.push(newAuction); 
	} 
this.setState({ auctions: new_auctions }); // Update the state
  }
  async setActiveAuction(auction, _this) {
    // Step 5 - insert code here to create auction contract object
    _this._auction = new ethers.Contract( 
 	auction.auctionAddress, 
 	AuctionArtifact.abi, 
 	_this.signer 
	);
    // Step 10 - insert code here to set an active auction
    let previousBids = await _this._auction.allBids(); // Get the bids
let bids = []; // A list of bids
for (let i = 0; i < previousBids[0].length; i++) {
 // Loop through the bids
 bids.push({
  // Add the bid to the list
  bidder: previousBids[0][i], // The bidder
  bid: ethers.utils.formatEther(previousBids[1][i]), // The bid
 });
}

auction.bids = bids;
let highestBidder = await _this._auction.maxBidder();
auction.highestBidder = highestBidder;

let minIncrement = await _this._auction.minIncrement();
auction.minIncrement = ethers.utils.formatEther(minIncrement);
_this.setState({ activeAuction: auction }); // Update the state

  }
  renderAuctionElement(auction, _this) {
    let state = "";
    if (auction.auctionState === 0) {
      state = "Open";
    }
    if (auction.auctionState === 1) {
      state = "Cancelled";
    }
    if (auction.auctionState === 2) {
      state = "Ended";
    }
    if (auction.auctionState === 3) {
      state = "Direct Buy";
    }
    return (
      <div style={{ background: "yellow" }} class="col">
        <p>ID: {auction.tokenId}</p> {/* ID of the token */}
        <p>Highest Bid: {auction.highestBid || 0}</p>
        {/* Highest bid */}
        <p>Direct Buy: {auction.directBuyPrice}</p> {/* Direct buy price */}
        <p>Starting Price: {auction.startPrice}</p> {/* Starting price */}
        <p>Owner: {auction.owner}</p> {/* Owner of the token */}
        <p>
          End Time:{" "}
          {Math.round((auction.endTime * 1000 - Date.now()) / 1000 / 60)}{" "}
          {/* Time left in minutes */}
          minutes
        </p>
        <p>Auction State: {state}</p>
        <button
          class="btn-primary"
          onClick={() => {
            _this.setActiveAuction(auction, _this);
          }}
        >
          See More
        </button>
      </div>
    );
  }

  renderActiveAuction() {
    let activeAuction = this.state.activeAuction;

    let state = "";
    if (activeAuction.auctionState === 0) {
      // If the auction is open
      state = "Open";
    }
    if (activeAuction.auctionState === 1) {
      // If the auction is cancelled
      state = "Cancelled";
    }
    if (activeAuction.auctionState === 2) {
      // If the auction is ended
      state = "Ended";
    }
    if (activeAuction.auctionState === 3) {
      // If the auction is ended by a direct buy
      state = "Direct Buy";
    }
    let isOwner = this.state.currentAddress === activeAuction.owner; // Check if the current address is the owner
    let isAuctionOpen = state === "Open"; // Check if the auction is open
    // let isAuctionCancelled = state === "Cancelled"; // Check if the auction is cancelled
    let highestBidder = "";
    activeAuction.bids.forEach((bid) => {
      if (bid.bid === activeAuction.highestBid) {
        highestBidder = bid.bidder;
      }
    });
    const isHighestBidder = highestBidder === this.state.currentAddress;
    let isAuctionEnded = state === "Ended" || state === "Direct Buy"; // Check if the auction is ended
    return (
      <div>
        <div class="col">
          <button
            class="btn-secondary"
            onClick={() => this.setState({ activeAuction: null })}
          >
            Go Back
          </button>
          <p>ID: {activeAuction.tokenId}</p> {/* ID of the token */}
          <p>Highest Bid: {activeAuction.highestBid || 0} AVAX</p>
          {/* Highest bid */}
          <p>Direct Buy: {activeAuction.directBuyPrice} AVAX</p>{" "}
          {/* Direct buy price */}
          <p>Minimum Increment: {activeAuction.minIncrement} AVAX</p>{" "}
          {/* Minimum increment in AVAX */}
          <p>Starting Price: {activeAuction.startPrice} AVAX</p>{" "}
          {/* Starting price */}
          <p>Owner: {activeAuction.owner}</p> {/* Owner of the token */}
          <p>
            End Time:{" "}
            {Math.round(
              (activeAuction.endTime * 1000 - Date.now()) / 1000 / 60
            )}{" "}
            {/* Time left in minutes */}
            minutes
          </p>
          <p>Auction State: {state}</p>
        </div>
        <div class="col">
          <h3>Bids</h3>
          <table class="table">
            <thead>
              <tr>
                <th>Bidder</th>
                <th>Bid</th>
              </tr>
            </thead>
            <tbody>
              {activeAuction.bids.map((bid) => {
                return (
                  <tr key={bid.bidder}>
                    <td>{bid.bidder}</td>
                    <td>{bid.bid} AVAX</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div class="col">
          {isAuctionOpen && !isOwner ? (
            <div>
              <input
                type="number"
                placeholder="0.5"
                onChange={(e) => this.setState({ bidAmount: e.target.value })}
              />
              <button
                class="btn-primary"
                onClick={() => this.placeBid(this.state.bidAmount)}
              >
                Place Bid
              </button>
            </div>
          ) : null}
          {isOwner && isAuctionOpen && activeAuction.bids.length === 0 ? (
            <button class="btn-danger" onClick={() => this.cancelAuction()}>
              Cancel Auction
            </button>
          ) : null}
          {isOwner && isAuctionEnded && activeAuction.bids.length > 0 ? (
            <button class="btn-secondary" onClick={() => this.withdrawFunds()}>
              Withdraw Funds
            </button>
          ) : null}
          {((activeAuction.bids.length === 0 && isOwner) || isHighestBidder) &&
          isAuctionEnded ? (
            <button class="btn-secondary" onClick={() => this.withdrawToken()}>
              Withdraw Token
            </button>
          ) : null}
        </div>
      </div>
    );
  }
  async placeBid(amount) {
    if (!amount) return;
    amount = ethers.utils.parseEther(amount.toString()); // Amount in AVAX
    // Step 11 - insert code here to place a bid
    let { hash } = await this._auction.placeBid({ value: amount });  
await this.provider.waitForTransaction(hash);  
alert(`Transaction sent! Hash: ${hash}`); // Show the transaction hash
    this.setActiveAuction(this.state.activeAuction, this);
  }

  async withdrawToken() {
    // Step 12 - insert code here to withdraw the NFT
    let { hash } = await this._auction.withdrawToken();
await this.provider.waitForTransaction(hash);
alert(`Withdrawal Successful! Hash: ${hash}`);
    window.location.reload(); // Reload the page
  }

  async withdrawFunds() {
    // Step 13 - insert code here to withdraw funds
    let { hash } = await this._auction.withdrawFunds();
await this.provider.waitForTransaction(hash);
alert(`Withdrawal Successful! Hash: ${hash}`);
    window.location.reload(); // Reload the page
  }

  async cancelAuction() {
    // Step 14 - insert code here to cancel the auction
    /*let { hash } = await this._auction.cancelAuction(); 
await this.provider.waitForTransaction(hash);  
alert(`Auction Canceled! Hash: ${hash}`);*/
    window.location.reload(); // Reload the page
  }

  componentDidMount() {
    this.init();
  }
  render() {
    return (
      <div>
        <div class="jumbotron d-flex align-items-center">
          <div class="container">
            {this.state.activeAuction != null ? (
              this.renderActiveAuction()
            ) : (
              <div class="auctions row">
                {this.state.auctions.map((auction) =>
                  this.renderAuctionElement(auction, this)
                )}
              </div>
            )}
          </div>
        </div>
        <div class="container">
          <form>
            <div class="mb-3">
              <label for="startprice" class="form-label">
                Start Price
              </label>
              <input
                value={this.state.newAuction.startPrice}
                onChange={(e) =>
                  this.setState({
                    newAuction: {
                      ...this.state.newAuction,
                      startPrice: parseFloat(e.target.value),
                    },
                  })
                }
                type="number"
                class="form-control"
                id="startprice"
              />
              <label for="startprice" class="form-label">
                Token Id
              </label>
              <input
                value={this.state.newAuction.tokenId}
                onChange={(e) =>
                  this.setState({
                    newAuction: {
                      ...this.state.newAuction,
                      tokenId: parseInt(e.target.value),
                    },
                  })
                }
                type="number"
                class="form-control"
                id="startprice"
              />
              <label class="form-label">Minimum Increment</label>
              <input
                value={this.state.newAuction.minIncrement}
                onChange={(e) =>
                  this.setState({
                    newAuction: {
                      ...this.state.newAuction,
                      minIncrement: parseFloat(e.target.value),
                    },
                  })
                }
                type="number"
                class="form-control"
              />
              <label class="form-label">Direct Buy Price</label>
              <input
                value={this.state.newAuction.directBuyPrice}
                onChange={(e) =>
                  this.setState({
                    newAuction: {
                      ...this.state.newAuction,
                      directBuyPrice: parseFloat(e.target.value),
                    },
                  })
                }
                type="number"
                class="form-control"
              />

              <label class="form-label">Duration In Minutes</label>
              <input
                value={this.state.newAuction.endTime}
                onChange={(e) =>
                  this.setState({
                    newAuction: {
                      ...this.state.newAuction,
                      endTime: parseInt(e.target.value),
                    },
                  })
                }
                type="number"
                class="form-control"
              />
            </div>

            <button
              type="button"
              onClick={() => this.createAuction()}
              class="btn btn-primary"
            >
              Create Auction
            </button>
          </form>
          {/* <button class="btn btn-fanger">Mint NFT</button> */}
          <p>
            Your items
            <br />
            {(this.state.myItems || [""]).map((x) => `id: ${x} `) || ""}
          </p>
        </div>
      </div>
    );
  }
}
export default App;
