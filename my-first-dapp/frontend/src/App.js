import React, { useEffect, useState } from "react";
import contract from "./contracts/StackUp.json";
import { ethers } from "ethers";

const contractAddr = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const abi = contract.abi;

function App() {
 const [adminAddr, setAdminAddr] = useState("nil");
 const [currentAccount, setCurrentAccount] = useState(null);
 const [allQuestsInfo, setAllQuestsInfo] = useState(null);
 const [userQuestStatuses, setUserQuestStatuses] = useState(null);
 const [questId, setQuestId] = useState(null);

 const connectWalletHandler = async () => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
   try {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log(accounts);
    setCurrentAccount(accounts[0]);
    console.log("found an account:", accounts[0]);
   } catch (err) {
    console.log(err);
   }
  } else {
   // MetaMask not installed
   console.log("please install metamask");
  }
 };

 const getAdminAddr = async () => {
  try {
   const provider = new ethers.providers.Web3Provider(window.ethereum);
   const stackupContract = new ethers.Contract(contractAddr, abi, provider);

   const adminAddr = await stackupContract.admin();
   console.log("adminAddr:", adminAddr);
   setAdminAddr(adminAddr);
  } catch (err) {
   console.log("getAdminAddr error...");
   console.log(err);
  }
 };

 const getQuestsInfo = async () => {
  try {
   const provider = new ethers.providers.Web3Provider(window.ethereum);
   const stackupContract = new ethers.Contract(contractAddr, abi, provider);

   const nextQuestId = await stackupContract.nextQuestId();
   let allQuestsInfo = [];
   let thisQuest;
   for (let i = 0; i < nextQuestId; i++) {
    thisQuest = await stackupContract.quests(i);
    allQuestsInfo.push(thisQuest);
   }
   setAllQuestsInfo(allQuestsInfo);
  } catch (err) {
   console.log("getQuestsInfo error...");
   console.log(err);
  }
 };

 const getUserQuestStatuses = async () => {
  try {
   if (currentAccount) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const stackupContract = new ethers.Contract(contractAddr, abi, provider);

    const nextQuestId = await stackupContract.nextQuestId();
    const questStatusMapping = {
     0: "Not Joined",
     1: "Joined",
     2: "Submitted",
    };
    let userQuestStatuses = [];
    let thisQuest;

    for (let i = 0; i < nextQuestId; i++) {
     let thisQuestStatus = [];
     thisQuest = await stackupContract.quests(i);

     let thisQuestTitle = thisQuest[2];
     let thisQuestId = thisQuest[0];

     thisQuestStatus.push(thisQuestTitle);
     const questStatusId = await stackupContract.playerQuestStatuses(currentAccount, thisQuestId);
     thisQuestStatus.push(questStatusMapping[questStatusId]);

     userQuestStatuses.push(thisQuestStatus);
    }
    setUserQuestStatuses(userQuestStatuses);
   }
  } catch (err) {
   console.log("getUserQuestStatuses error...");
   console.log(err);
  }
 };

 const joinQuestHandler = async () => {
  try {
   if (!questId) {
    alert("input quest ID before proceeding");
   } else {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const stackupContract = new ethers.Contract(contractAddr, abi, signer);
    const tx = await stackupContract.joinQuest(questId);
    await tx.wait();
   }
  } catch (err) {
   console.log(err);
   alert("error encountered! refer to console log to debug");
  }
 };

  const submitQuestHandler = async () => {
  try {
   if (!questId) {
    alert("input quest ID before proceeding");
   } else {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const stackupContract = new ethers.Contract(contractAddr, abi, signer);
    const tx = await stackupContract.submitQuest(questId);
    await tx.wait();
   }
  } catch (err) {
   console.log(err);
   alert("error encountered! refer to console log to debug");
  }
 };

 useEffect(() => {
  getAdminAddr();
  getQuestsInfo();
  getUserQuestStatuses();
 });

 return (
  <div className="container">
   <h1>Build Your First Dapp</h1>
   <h4>By: Aguito</h4>
   {currentAccount ? <h4>Wallet connected: {currentAccount}</h4> : <button onClick={connectWalletHandler}>Connect Wallet</button>}
   <h4>Admin address: {adminAddr}</h4>
   <h2>
    <u>All Quests:</u>
   </h2>

   <div>
    {allQuestsInfo &&
     allQuestsInfo.map((quest) => {
      return (
       <div key={quest[0]}>
        <h4>{quest[2]}</h4>
        <ul>
         <li>questId: {quest[0].toString()}</li>
         <li>number of players: {quest[1].toString()}</li>
         <li>reward: {quest[3].toString()}</li>
         <li>number of rewards available: {quest[4].toString()}</li>
        </ul>
       </div>
      );
     })}
   </div>
   <h2>
    <u>Your Quest Statuses:</u>
   </h2>
   <div>
    <ul>
     {userQuestStatuses &&
      userQuestStatuses.map((quest) => {
       return (
        <div>
         <li>
          {quest[0]} - {quest[1]}
         </li>
        </div>
       );
      })}
    </ul>
   </div>
   <h2>
    <u>Actions:</u>
   </h2>
   <div>
    <input type="text" placeholder="Quest Id" value={questId} onChange={(e) => setQuestId(e.target.value)} />
    <button onClick={joinQuestHandler}>Join Quest</button>
    <button onClick={submitQuestHandler}>Submit Quest</button>
   </div>
  </div>
 );
}

export default App;