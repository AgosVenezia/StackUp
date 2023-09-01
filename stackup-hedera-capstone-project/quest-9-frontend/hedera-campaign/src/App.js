import "./App.css";
import { useState, useEffect } from "react";
import {
  AccountId,
  PrivateKey,
  Client,
  TopicMessageSubmitTransaction,
  AccountAllowanceApproveTransaction,
  TokenAssociateTransaction,
} from "@hashgraph/sdk";
import { Buffer } from "buffer";
import { Routes, Route, NavLink } from "react-router-dom";
import CreateCar from "./pages/CreateCar";
import GiveScore from "./pages/GiveScore";
import Borrow from "./pages/BorrowCar";
import Return from "./pages/ReturnCar";
import { ethers } from "ethers";
import { MirrorNodeClient } from "../src/mirrorNodeClient";

// Part 1 - import ABI
import MerchantBackend from "./MerchantBackend.json";

function App() {
  const [defaultAccount, setDefaultAccount] = useState("");
  const [score, setScore] = useState(0);
  const [contract, setContract] = useState();

  // Part 2 - define environment variables
  const scAddress = process.env.REACT_APP_SC_ADDRESS;
  const nftAddress = process.env.REACT_APP_NFT_ADDRESS;
  const nftId = AccountId.fromSolidityAddress(nftAddress).toString();
  const ftAddress = process.env.REACT_APP_FT_ADDRESS;
  const ftId = AccountId.fromSolidityAddress(ftAddress).toString();
  const topicId = process.env.REACT_APP_TOPIC_ID;

  const merchantKey = PrivateKey.fromString(process.env.REACT_APP_MERCHANT_PRIVATE_KEY);
  const merchantId = AccountId.fromString(process.env.REACT_APP_MERCHANT_ID);
  const merchantAddress = process.env.REACT_APP_MERCHANT_ADDRESS;

  const customerAccount = AccountId.fromString(process.env.REACT_APP_CUSTOMER_ACCOUNT_ID);

  // Part 3 - create client instance
  const client = Client.forTestnet().setOperator(merchantId, merchantKey);

  const connect = async () => {
    if (window.ethereum) {
      // Part 4 - connect wallet
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      signer.getAddress().then(setDefaultAccount);
      window.ethereum.on("accountsChanged", changeConnectedAccount);

      const contractInstance = new ethers.Contract(scAddress, MerchantBackend.abi, signer);
      setContract(contractInstance);
    }
  };

  const changeConnectedAccount = async (newAddress) => {
    try {
      newAddress = Array.isArray(newAddress) ? newAddress[0] : newAddress;
      setDefaultAccount(newAddress);
    } catch (err) {
      console.error(err);
    }
  };

  const getContract = async () => {
    // Part 5 - create contract instance
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const signer = provider.getSigner();
    signer.getAddress().then(setDefaultAccount);
    const contractInstance = new ethers.Contract(scAddress, MerchantBackend.abi, signer);
    setContract(contractInstance);
  };

  const getScore = async () => {
    try {
      if (defaultAccount) {
        // Part 16 - get reputation token score
        await fetch(`https://testnet.mirrornode.hedera.com/api/v1/accounts/${defaultAccount}/tokens?token.id=${ftId}`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.tokens[0]) {
          setScore(0);
          return;
          }
          setScore(data.tokens[0].balance);
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    connect();
    getScore();
  }, [defaultAccount]);

  const createCar = async (cid) => {
    try {
      if (!contract) getContract();
      // Part 6 - add new car
      const tx = await contract.mintNFT(nftAddress, [Buffer.from(cid)], {
        gasLimit: 1_000_000,
       });
       await tx.wait();

      // Part 7 - submit add new car logs to topic
      new TopicMessageSubmitTransaction()
          .setTopicId(topicId)
          .setMessage(
          `{
        type: Minting,
        accountAddr: ${defaultAccount},
        tokenId: ${nftId}
        }`
          )
          .execute(client);

      alert("Successfully added new car!");
    } catch (e) {
      alert("Failed to add new car");
      console.log(e);
    }
  };

  const associateToken = async (id) => {
    // Part 8 - associate token
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const abi = ["function associate()"];
      const contract = new ethers.Contract(id, abi, signer);

      try {
      const transactionResult = await contract.associate();
      return transactionResult.hash;
      } catch (error) {
      console.warn(error.message ? error.message : error);
      return null;
      }
  };

  const isAssociated = async (id) => {
    // Part 9 - check token association
    const mirrorNodeClient = new MirrorNodeClient("testnet");
    return await mirrorNodeClient
      .getAccountInfo(customerAccount)
      .then((acc) => {
      const associatedTokensList = acc.balance.tokens;
      return associatedTokensList.some((token) => token.token_id === id);
      })
      .catch((rejectErr) => {
      console.log("Could not get token balance", rejectErr);
      });
  };

  const borrowCar = async (tokenSolidityAddress, serial) => {
    // Part 10 - check if tokens are associated, associate them if not
    if (!(await isAssociated(tokenSolidityAddress))) {
      await associateToken(tokenSolidityAddress);
     }
    if (!(await isAssociated(ftAddress))) {
        await associateToken(ftAddress);
      }

    try {
      if (!contract) getContract();
      // Part 11 - borrow new car
      const tx = await contract.borrowing(tokenSolidityAddress, serial, {
        value: ethers.utils.parseEther("1000"),
        gasLimit: 2_000_000,
       });
       await tx.wait();

      // Part 12 - submit borrow car logs to topic
      new TopicMessageSubmitTransaction()
          .setTopicId(topicId)
          .setMessage(
          `{
        type: Borrowing,
        accountAddr: ${defaultAccount},
        tokenId: ${AccountId.fromSolidityAddress(tokenSolidityAddress)},
        serial: ${serial}
      }`
          )
          .execute(client);

      alert("Successfully borrowed car!");
    } catch (e) {
      alert("Failed to borrrow car");
      console.log(e);
    }
  };

  const getContractId = async () => {
    const mirrorNodeClient = new MirrorNodeClient("testnet");
    return await mirrorNodeClient
      .getContractInfo(scAddress)
      .then((acc) => {
        const contractId = acc.contract_id;
        return contractId;
      })
      .catch((rejectErr) => {
        console.log("Could not get token balance", rejectErr);
      });
  };

  const returnCar = async (tokenSolidityAddress, serial) => {
    try {
      if (!contract) getContract();

      // Part 13 - give SC allowance
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const abi = ["function approve(address _spender, uint256 _value) public returns (bool success)"];
        const ethContract = new ethers.Contract(tokenSolidityAddress, abi, signer);

        try {
          const transactionResult = await ethContract.approve(scAddress, serial);
          await transactionResult.wait();
        } catch (error) {
          console.warn(error.message ? error.message : error);
        }

      // Part 14 - return car
      const tx = await contract.returning(tokenSolidityAddress, serial, {
        gasLimit: 1_000_000,
       });
       await tx.wait();

      // Part 15 - submit return car logs to topic
      new TopicMessageSubmitTransaction()
            .setTopicId(topicId)
            .setMessage(
            `{
          type: Returning,
          accountAddr: ${defaultAccount},
          tokenId: ${tokenSolidityAddress},
          serial: ${serial}
        }`
            )
            .execute(client);

      alert("Successfully returned car!");
    } catch (e) {
      alert("Failed to return car");
      console.log(e);
    }
  };

  const giveScore = async (customer, score) => {
    try {
      if (!contract) getContract();
      // Part 17 - give reputation tokens
      await fetch(`https://testnet.mirrornode.hedera.com/api/v1/accounts/${customer}`)
        .then((response) => response.json())
        .then(async (data) => {
        console.log(data.evm_address);
        const tx = await contract.scoring(data.evm_address, score, {
          gasLimit: 1_000_000,
        });
        await tx.wait();
        });

      // Part 18 - submit give REP tokens logs to topic
      new TopicMessageSubmitTransaction()
          .setTopicId(topicId)
          .setMessage(
          `{
        type: Scoring,
        accountAddr: ${customer},
        tokenId: ${ftId.toString()},
        amount: ${1}
        }`
          )
          .execute(client);

      alert("Successfully gave REP tokens!");
    } catch (e) {
      alert("Failed to give REP tokens");
      console.log(e);
    }
  };

  const isMerchant = defaultAccount.toLowerCase() === merchantAddress.toLowerCase();
  return (
    <>
      <nav>
        <ul className="nav">
          {isMerchant ? (
            <>
              <NavLink to="/" className="nav-item">
                Add Car
              </NavLink>
              <NavLink to="/give" className="nav-item">
                Give Score
              </NavLink>
            </>
          ) : defaultAccount ? (
            <>
              <NavLink to="/" className="nav-item">
                Borrow Car
              </NavLink>
              <NavLink to="/give" className="nav-item">
                Return Car
              </NavLink>
            </>
          ) : (
            <></>
          )}
          <div className="acc-container">
            {!isMerchant && defaultAccount && <p className="acc-score">My Reputation Tokens: {defaultAccount ? score : "0"}</p>}
            <div className="connect-btn">
              <button onClick={connect} className="primary-btn">
                {defaultAccount
                  ? `${defaultAccount?.slice(0, 5)}...${defaultAccount?.slice(defaultAccount?.length - 4, defaultAccount?.length)}`
                  : "Not Connected"}
              </button>
            </div>
          </div>
        </ul>
      </nav>

      {!defaultAccount ? <h1 className="center">Connect Your Wallet First</h1> : <></>}

      <Routes>
        {isMerchant ? (
          <>
            <Route path="/" element={<CreateCar createCar={createCar} />} />
            <Route path="/give" element={<GiveScore giveScore={giveScore} />} />
          </>
        ) : defaultAccount ? (
          <>
            <Route path="/" element={<Borrow borrowCar={borrowCar} />} />
            <Route path="/give" element={<Return returnCar={returnCar} address={defaultAccount} />} />
          </>
        ) : (
          <></>
        )}
      </Routes>
    </>
  );
}

export default App;
