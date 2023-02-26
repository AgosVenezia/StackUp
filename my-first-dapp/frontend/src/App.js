import React, { useEffect, useState } from "react";
import contract from "./contracts/StackUp.json";
import { ethers } from "ethers";

const contractAddr = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const abi = contract.abi;

function App() {
 const [adminAddr, setAdminAddr] = useState("nil");
 const [currentAccount, setCurrentAccount] = useState(null);

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

 useEffect(() => {
  getAdminAddr();
 });

 return (
  <div className="container">
   <h1>Build Your First Dapp</h1>
   <h4>By: Aguito</h4>
   {currentAccount ? <h4>Wallet connected: {currentAccount}</h4> : <button onClick={connectWalletHandler}>Connect Wallet</button>}
   <h4>Admin address: {adminAddr}</h4>
  </div>
 );
}

export default App;