import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Link from "next/link";
import Modal from "react-modal";

//ABIs
import GroupBuyABI from "../utils/groupBuy.json";
import GroupBuyManagerABI from "../utils/groupBuyManager.json";
import USDCABI from "../utils/usdcContract.json";

type GroupBuys = {
  endTime: number;
  price: string; //check
  seller: string; //address
  groupBuyState: number;
  productName: string;
  productDescription: string;
  groupBuyAddress: string; //each group buy has its own contract
  buyers: string[]; //list of buyers
};

export default function Home() {
  const originalUsdcContract = "0x07865c6E87B9F70255377e024ace6630C1Eaa37F"; //usdc token contract address
  const groupBuyManagerContract =
    "Replace with your group buy manager smart contract address here";

  //variables
  const [currentWalletAddress, setCurrentWalletAddress] = useState<string>("");
  const [allGroupBuys, setAllGroupBuys] = useState<GroupBuys[]>([]);
  const [createGroupBuyFields, setGroupBuyFields] = useState({
    endTime: 0,
    price: 0,
    productName: "",
    productDescription: "",
  });

  const [activeGroupBuy, setGroupBuyToActive] = useState<GroupBuys | null>(
    null
  );

  // whether or not to show the loading dialog
  const [isLoading, setIsLoading] = useState(false);

  // text data to display on loading dialog
  const [loadedData, setLoadedData] = useState("Loading...");

  function openModal() {
    setIsLoading(true);
  }

  function closeModal() {
    setIsLoading(false);
  }

  //functions
  async function getAllGroupBuys() {
    const { ethereum } = window;

    // Check if MetaMask is installed
    if (!ethereum) {
      return "Make sure you have MetaMask Connected!";
    }

    // Get user Metamask Ethereum wallet address
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    // Get the first account address
    const walletAddr = accounts[0];
    //set to variable to store current wallet address
    setCurrentWalletAddress(walletAddr);

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      // Create a contract instance of your deployed GroupBuy Manager contract
         // 1) add code here
        const groupBuyContractManager = new ethers.Contract(
        groupBuyManagerContract,
        GroupBuyManagerABI,
        signer
        );

      // call the getGroupBuys function from the contract to get all addresses
      // 2) add code here
      const groupBuysAddresses = await groupBuyContractManager.getGroupBuys();

      // call getGroupBuyInfo function from contract
      // 3) add code here
      const groupBuys = await groupBuyContractManager.getGroupBuyInfo(
        groupBuysAddresses
      );

      // declare new array
      let new_groupBuys = [];

      // loop through array and add it into a new array
      // 4) add code here
   for (let i = 0; i < groupBuys.endTime.length; i++) {
    let endTime: number = groupBuys.endTime[i].toNumber();
    let groupBuyState: number = groupBuys.groupBuyState[i].toNumber();
 
    let price = groupBuys.price[i]; //
    let productName: string = groupBuys.productName[i];
    let productDescription: string = groupBuys.productDescription[i];
 
    let sellerAddress: string = groupBuys.seller[i];
 
    let newGroupBuy = {
     endTime: endTime,
     price: (price / 1000000).toString(),
     seller: sellerAddress.toLowerCase(),
     groupBuyState: groupBuyState,
     productName: productName,
     productDescription: productDescription,
     groupBuyAddress: groupBuysAddresses[i],
     buyers: [],
    };
    new_groupBuys.push(newGroupBuy);
   }

      // set to variable
      // 5) add code here
   setAllGroupBuys(new_groupBuys);
    }
  }

  async function createGroupBuy() {
    try {
      //check if required fields are empty
      if (
        !createGroupBuyFields.price ||
        !createGroupBuyFields.endTime ||
        !createGroupBuyFields.productName ||
        !createGroupBuyFields.productDescription
      ) {
        return alert("Fill all the fields");
      }

      //check if fields meet requirements
      if (createGroupBuyFields.price < 0) {
        return alert("Price must be more than 0");
      }

      if (createGroupBuyFields.endTime < 5) {
        return alert("Duration must be more than 5 mins");
      }

      //call create groupbuy function from the contract
      const { ethereum } = window;

      if (ethereum) {
        //set loading modal to open and loading modal text
        setLoadedData("Creating group buy...Please wait");
        openModal();

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        //create contract instance
        const groupBuyContractManager = new ethers.Contract(
          groupBuyManagerContract,
          GroupBuyManagerABI,
          signer
        );

        // call create groupbuy function from the contract
        // 1) add code here
    let { hash } = await groupBuyContractManager.createGroupbuy(
      createGroupBuyFields.endTime * 60, // Converting minutes to seconds
      ethers.utils.parseUnits(createGroupBuyFields.price.toString(), 6), 
      createGroupBuyFields.productName,
      createGroupBuyFields.productDescription,
      {
       gasLimit: 1200000,
      }
     );

        //wait for transaction to be mined
        // 2) add code here
    await provider.waitForTransaction(hash);

        //close modal
        closeModal();

        //display alert message
        // 3) add code here
    alert(`Transaction sent! Hash: ${hash}`);

        //call allGroupbuys to refresh the current list
        await getAllGroupBuys();

        //reset fields back to default values
        setGroupBuyFields({
          endTime: 0,
          price: 0,
          productName: "",
          productDescription: "",
        });
      }
    } catch (error) {
      console.log(error);
      closeModal();
      alert(`Error: ${error}`);
      return `${error}`;
    }
  }

  async function setActiveGroupBuy(groupBuy: GroupBuys) {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      //create contract instance
      const groupBuyContract = new ethers.Contract(
        groupBuy.groupBuyAddress,
        GroupBuyABI,
        signer
      );

      //get all current buyers(address)
      let allCurrentBuyers = await groupBuyContract.getAllOrders();

      //set current group buy to active and update the buyers field
      setGroupBuyToActive({
        ...groupBuy,
        buyers: allCurrentBuyers,
      });
    }
  }

  async function placeOrder(currentActiveGroupBuy: GroupBuys | null) {
    try {
      const { ethereum } = window;

      if (ethereum) {
        // check if the active group buy is null
        if (currentActiveGroupBuy == null) {
          return;
        }
        //open loading modal and set loading text
        setLoadedData("Getting approval...please wait");
        openModal();

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        // create USDC contract instance
        const usdcContract = new ethers.Contract(
          originalUsdcContract,
          USDCABI,
          signer
        );

        // call approval function to give permission to transfer USDC from user wallet to groupbuy smart contract
        // 1) add code here
    const usdcApprovalTxn = await usdcContract.approve(
      currentActiveGroupBuy.groupBuyAddress,
      ethers.utils.parseUnits("1000", 6)
     );

        // wait for transaction to be mined
        // 2) add code here
    await usdcApprovalTxn.wait();

        closeModal();

        //after giving approval we will palce our order here
        setLoadedData("Placing Order...please wait");
        openModal();

        // create groupBuy contract instance
        const groupBuyContract = new ethers.Contract(
          currentActiveGroupBuy.groupBuyAddress,
          GroupBuyABI,
          signer
        );

        // call place order function from group buy contract
        // 3) add code here
    let { hash } = await groupBuyContract.placeOrder({
      gasLimit: 700000,
     });

        // Wait till the transaction is mined
        // 4) add code here
    await provider.waitForTransaction(hash);

        closeModal();

        // display alert mesaage
        // 5) add code here
    alert(`Transaction sent! Hash: ${hash}`);

        //get updated buyers
        //get all current buyers(address) and price(same for all)
        let allCurrentBuyers = await groupBuyContract.getAllOrders();

        //set current group buy to active
        setGroupBuyToActive({
          ...currentActiveGroupBuy,
          buyers: allCurrentBuyers,
        });
      }
    } catch (error) {
      closeModal();
      alert(`Error: ${error}`);
      return `${error}`;
    }
  }

  async function withdrawFunds(currentActiveGroupBuy: GroupBuys | null) {
    try {
      const { ethereum } = window;

      if (ethereum) {
        if (currentActiveGroupBuy == null) {
          return;
        }

        // open modal and set loading text
        setLoadedData("Withdrawing funds...Please wait");
        openModal();

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        //create groupBuy contract instance
        const groupBuyContract = new ethers.Contract(
          currentActiveGroupBuy.groupBuyAddress,
          GroupBuyABI,
          signer
        );

        //call withdraw funds function from group buy contract
        // 1) add code here
    let { hash } = await groupBuyContract.withdrawFunds();

        // Wait till the transaction is mined
        // 2) add code here
    await provider.waitForTransaction(hash);

        setIsLoading(false);
        closeModal();
        // display slert message
        // 3) add code here
    alert(`Transaction sent! Hash: ${hash}`);
      }
    } catch (error) {
      console.log(error);
      closeModal();
      alert(`Error: ${error}`);
      return `${error}`;
    }
  }

  //render functions
  function renderGroupBuys(groupBuy: GroupBuys) {
    let state = "";
    if (groupBuy.groupBuyState === 0) {
      state = "Open";
    }
    if (groupBuy.groupBuyState === 1) {
      state = "Ended";
    }

    return (
      <div className={styles.createGroupBuyContainer}>
        <p className={styles.paragraphText}>
          Product Name: {groupBuy.productName}
        </p>
        <p className={styles.paragraphText}>
          Product Description: {groupBuy.productDescription}
        </p>
        <p className={styles.paragraphText}>
          Price: {groupBuy.price || 0} USDC
        </p>
        <p className={styles.paragraphText}>
          Seller Address: {groupBuy.seller}
        </p>{" "}
        {(() => {
          if (groupBuy.groupBuyState === 0) {
            return (
              <p className={styles.paragraphText}>
                Ending in :{" "}
                {Math.round((groupBuy.endTime * 1000 - Date.now()) / 1000 / 60)}{" "}
                {/* Time left in minutes */}
                minutes
              </p>
            );
          }
        })()}
        <p className={styles.paragraphText}>Group buy State: {state}</p>
        <button
          className={styles.seeMoreBtn}
          onClick={() => {
            setActiveGroupBuy(groupBuy);
          }}
        >
          See More
        </button>
      </div>
    );
  }

  function renderSpecificGroupBuy(
    groupBuy: GroupBuys,
    currentUserWalletAddress: string
  ) {
    let state = "";
    if (groupBuy.groupBuyState === 0) {
      state = "Open";
    }
    if (groupBuy.groupBuyState === 1) {
      state = "Ended";
    }

    let isOwner = groupBuy.seller === currentUserWalletAddress;

    let isGroupBuyOpen = state === "Open"; // Check if the group buy is still open
    let hasGroupBuyEnded = state === "Ended"; // Check if the group buy has ended

    let isCurrentUserABuyer = groupBuy.buyers.some(
      (buyer) => buyer.toLowerCase() === currentUserWalletAddress
    );

    return (
      <div className={styles.activeGroupBuyContainer}>
        <div>
          <div>
            <p className={styles.paragraphText}>
              Product Name: {groupBuy.productName || 0}{" "}
            </p>
            <p className={styles.paragraphText}>
              Product Description: {groupBuy.productDescription || 0}{" "}
            </p>
            <p className={styles.paragraphText}>Price: {groupBuy.price} USDC</p>{" "}
            {/* Starting price */}
            <p className={styles.paragraphText}>
              Seller: {groupBuy.seller}
            </p>{" "}
            <div style={{ display: "flex" }}>
              <p className={styles.paragraphText}>
                Group buy Smart Contract Address:{" "}
              </p>
              <p className={styles.hyperlinkText}>
                <Link
                  href={`https://goerli.etherscan.io/address/${groupBuy.groupBuyAddress}`}
                  target="_blank"
                >
                  {groupBuy.groupBuyAddress}
                </Link>
              </p>
            </div>
            {(() => {
              if (groupBuy.groupBuyState === 0) {
                return (
                  <p className={styles.paragraphText}>
                    Ending in :{" "}
                    {Math.round(
                      (groupBuy.endTime * 1000 - Date.now()) / 1000 / 60
                    )}{" "}
                    {/* Time left in minutes */}
                    minutes
                  </p>
                );
              }
            })()}
            <p className={styles.paragraphText}>Group Buy State: {state}</p>
          </div>
          <div>
            <h3 style={{ padding: "10px" }}>List of all Buyers</h3>
            <table>
              <thead>
                <tr>
                  <th
                    style={{
                      borderColor: "black",
                      borderStyle: "groove",
                      padding: "10px",
                    }}
                  >
                    Buyer
                  </th>
                  <th
                    style={{
                      borderColor: "black",
                      borderStyle: "groove",
                      padding: "10px",
                    }}
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {groupBuy.buyers.map((buyer) => {
                  return (
                    <tr key={buyer}>
                      <td
                        style={{
                          borderColor: "black",
                          borderStyle: "groove",
                          padding: "10px",
                        }}
                      >
                        {buyer.toLowerCase()}
                      </td>
                      <td
                        style={{
                          borderColor: "black",
                          borderStyle: "groove",
                          padding: "10px",
                        }}
                      >
                        {groupBuy.price} USDC
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            {isGroupBuyOpen && !isOwner && !isCurrentUserABuyer ? (
              <div>
                <button
                  className={styles.placeOrderBtn}
                  onClick={() => placeOrder(activeGroupBuy)}
                >
                  Place Order
                </button>
              </div>
            ) : null}
            <button
              className={styles.backBtn}
              onClick={() => setGroupBuyToActive(null)}
            >
              Go Back
            </button>
            {isOwner && //only seller can withdraw funds
            hasGroupBuyEnded && //can only withdraw after group buy ends
            activeGroupBuy != null &&
            activeGroupBuy.buyers.length > 0 ? ( //withdraw if there are buyers
              <button
                className={styles.withdrawFundsBtn}
                onClick={() => withdrawFunds(activeGroupBuy)}
              >
                Withdraw Funds
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      color: "black ",
    },
  };

  useEffect(() => {
    getAllGroupBuys();
  }, []);

  return (
    <>
      <Head>
        <title>Group Buying Web App</title>

        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/buy.png" />
      </Head>

      <div
        style={{
          backgroundColor: "white",
          minWidth: "500px",
          paddingBottom: "10px",
        }}
      >
        <div className={styles.topPanel}>
          <div className={styles.walletAddress}>{`Group Buying Web App`}</div>
          <div className={styles.walletAddress}>
            {`Wallet Address: ${currentWalletAddress}`}
          </div>
        </div>

        <Modal
          isOpen={isLoading}
          //onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {loadedData}
        </Modal>

        <h2 className={styles.allGroupBuy}>
          {(() => {
            if (activeGroupBuy == null) {
              return <div>{`All Group buys`}</div>;
            } else {
              return <div>{`Product`}</div>;
            }
          })()}
        </h2>
        {/* <div>{allGroupBuys.map((groupBuy) => renderGroupBuys(groupBuy))}</div> */}

        <div>
          {activeGroupBuy != null ? (
            renderSpecificGroupBuy(activeGroupBuy, currentWalletAddress)
          ) : (
            <div>
              {allGroupBuys.map((groupBuy) => renderGroupBuys(groupBuy))}
            </div>
          )}
        </div>

        <div className={styles.createGroupBuyContainer}>
          <h2 className={styles.createGroupBuyText}>Create Group buy</h2>

          <div style={{ margin: "20px" }}>
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Enter your product name"
              onChange={(e) =>
                setGroupBuyFields({
                  ...createGroupBuyFields,
                  productName: e.target.value,
                })
              }
              value={createGroupBuyFields.productName}
              style={{
                padding: "15px",
                textAlign: "center",
                display: "block",
                width: "400px",
                backgroundColor: "black",
                color: "white",
              }}
            />
          </div>

          <div style={{ margin: "20px" }}>
            <label>Product Description</label>
            <input
              type="text"
              placeholder="Enter your product description"
              onChange={(e) =>
                setGroupBuyFields({
                  ...createGroupBuyFields,
                  productDescription: e.target.value,
                })
              }
              value={createGroupBuyFields.productDescription}
              style={{
                padding: "15px",
                textAlign: "center",
                display: "block",
                width: "400px",
                backgroundColor: "black",
                color: "white",
              }}
            />
          </div>

          <div style={{ margin: "20px" }}>
            <label>Set Price (USDC)</label>
            <input
              type="number"
              placeholder="Price"
              onChange={(e) =>
                setGroupBuyFields({
                  ...createGroupBuyFields,
                  price: parseFloat(e.target.value),
                })
              }
              value={createGroupBuyFields.price}
              style={{
                padding: "15px",
                textAlign: "center",
                display: "block",
                backgroundColor: "black",
                color: "white",
                width: "400px",
              }}
            />
          </div>

          <div style={{ margin: "20px" }}>
            <label>Duration in Mins</label>
            <input
              type="number"
              placeholder="End Time(mins)"
              onChange={(e) =>
                setGroupBuyFields({
                  ...createGroupBuyFields,
                  endTime: parseInt(e.target.value),
                })
              }
              value={createGroupBuyFields.endTime}
              style={{
                padding: "15px",
                textAlign: "center",
                display: "block",
                backgroundColor: "black",
                color: "white",
                width: "400px",
              }}
            />
          </div>

          <button
            type="button"
            className={styles.createGroupBuyBtn}
            onClick={() => createGroupBuy()}
          >
            Create Group Buy
          </button>
        </div>
      </div>
    </>
  );
}
