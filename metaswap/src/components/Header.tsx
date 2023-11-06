import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export const Header: React.FC = () => {
    const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
    const [account, setAccount] = useState<string | null>(null);

    // Initialize provider when component mounts
  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(web3Provider);
    }
    // Function to handle account change
    const handleAccountChange = (accounts: string[]) => {
      setAccount(accounts[0]);
    };

    // Add event listener for account change
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountChange);
    }

    // Clean up event listener on component unmount
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountChange);
      }
    };
  }, []);

  const handleConnectWallet = async () => {
    if (!provider) return;

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  return (
    <header>
      {!account ? (
        <button onClick={handleConnectWallet} className="connectWallet">Connect Wallet</button>
      ) : (
        <>
          <span id="acc_name">{account.slice(0, 6)}...{account.slice(-4)}</span>
        </>
      )}
    </header>
  );

};