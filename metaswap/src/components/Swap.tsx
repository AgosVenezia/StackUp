import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import tokenSwapABI from '../utils/TokenSwapABI.json';
import ERC20_ABI from '../utils/ERC20ABI.json';

type TokenType = 'SDT' | 'SKT';

export const Swap: React.FC = () => {
    const TOKEN_ADDRESSES = {
     SDT: '0x9110daDD6abD472a8cEE33Fa8486Cb49C7f2470E',
     SKT: '0x4E0d9A83246Cf7cf09eC729025Bd91622B3B38dF',
    };
   
    const TOKENSWAP_CONTRACT_ADDRESS = '0xEFe7558176f8901cE3fEE4CB8d6a5a8eef1583fb';
   
    const contractABI = tokenSwapABI;
   
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [provider, setProvider] = useState<any>(null);
    const [contract, setContract] = useState<any>(null);
    const [amount, setAmount] = useState<string>('');
    const [selectedToken, setSelectedToken] = useState<TokenType>('SDT');
    const [swapAmount, setSwapAmount] = useState<string>('');
    const [swapToken, setSwapToken] = useState<TokenType>('SKT');

    useEffect(() => {
        if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
          // MetaMask is available
    
          // Request account access
          window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(() => {
              const provider = new ethers.providers.Web3Provider(window.ethereum);
              const contractInstance = new ethers.Contract(TOKENSWAP_CONTRACT_ADDRESS, contractABI, provider.getSigner());
    
              setProvider(provider);
              setContract(contractInstance);
            })
            .catch(error => {
              // User denied account access, or other error occurred
              console.error("Error accessing MetaMask accounts:", error);
              // Handle the error or notify the user
            });
        } else {
          // MetaMask isn't installed
          console.warn("Please install MetaMask to use this dapp.");
          // Notify the user or handle the scenario
        }
      }, []);

      useEffect(() => {
        setSwapToken(selectedToken === 'SDT' ? 'SKT' : 'SDT');
      }, [selectedToken]);
      
      const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value);
      };
      
      const handleTokenChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedToken(event.target.value as TokenType);
      };

      useEffect(() => {
        async function calculateSwapAmount() {
          if (!contract || !amount) return;
      
          const inputTokenAddress = TOKEN_ADDRESSES[selectedToken];
          const outputTokenAddress = TOKEN_ADDRESSES[swapToken];
      
          try {
            // Fetch the expected swap amount from the contract
            const expectedAmount = await contract.getSwapAmount(ethers.utils.parseUnits(amount, 18), inputTokenAddress, outputTokenAddress);
      
            // Update the state with the fetched value
            setSwapAmount(ethers.utils.formatUnits(expectedAmount, 18));
          } catch (error) {
            console.error("Error fetching the swap amount:", error);
          }
        }
      
        calculateSwapAmount();
      }, [amount, selectedToken, contract]);

      async function handleSwap() {
        try {
          const signer = provider.getSigner();
      
          // Get the input token contract instance
          const inputTokenContract = new ethers.Contract(
            TOKEN_ADDRESSES[selectedToken],
            ERC20_ABI,
            signer
          );
      
          // Approve token transfer
          const parsedAmount = ethers.utils.parseUnits(amount, 18);
          await inputTokenContract.approve(TOKENSWAP_CONTRACT_ADDRESS, parsedAmount);
      
          // Execute swap
          const outputTokenAddress = TOKEN_ADDRESSES[swapToken];
          const tx = await contract.swapTokens(parsedAmount, TOKEN_ADDRESSES[selectedToken], outputTokenAddress);
      
          // Notify user that the transaction has been submitted
          alert("Transaction submitted! Waiting for confirmation...");
          await provider.waitForTransaction(tx.hash);
          
          alert("Swap successful!"); // Provide feedback to the user
      
        } catch (error) {
          console.error("Error during the swap:", error);
          alert("Swap failed! Check console for details."); // Provide feedback to the user
        }
      }

      return (
        <div>
          <div>
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
            />
            <select value={selectedToken} onChange={handleTokenChange}>
              <option value="SDT">SDT</option>
              <option value="SKT">SKT</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Amount received"
              disabled
              value={swapAmount} />
            <select>
              <option value={swapToken}>{swapToken}</option>
            </select>
          </div>
          <button onClick={handleSwap}>Swap!</button>
        </div>
      );
      };