import { useEffect, useState } from "react";
import { AccountId } from "@hashgraph/sdk";

function ScoreForm({ index, account, giveScore, flag, setFlag }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await giveScore(account, document.getElementById(`score${index}`).value);
        setIsLoading(false);
        setFlag(!flag);
      }}
      className="box"
    >
      <div className="score-container">
        <input type="number" id={`score${index}`} placeholder="Score Amount" min={1} max={5} required />
        <button key={index} className="primary-btn" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Give Reputation Tokens"}
        </button>
      </div>
    </form>
  );
}

function GiveScore({ giveScore }) {
  const [data, setData] = useState();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    // Fetching data from Hedera Mirror Node for list of past borrower
    const escrowAddress = process.env.REACT_APP_SC_ADDRESS;
    const EvmAddress = escrowAddress.replace("0x", "");
    const readData = async () => {
      try {
        await fetch(`https://testnet.mirrornode.hedera.com/api/v1/accounts/${EvmAddress}`)
          .then((response) => response.json())
          .then(async (data) => {
            await fetch(
              `https://testnet.mirrornode.hedera.com/api/v1/tokens/${AccountId.fromSolidityAddress(
                process.env.REACT_APP_NFT_ADDRESS
              ).toString()}/balances?order=desc`
            )
              .then((response) => response.json())
              .then((list) => {
                setData(list?.balances?.filter((nft) => nft.account !== data.account));
              });
          });
      } catch (e) {
        console.log(e);
      }
    };

    readData();
  }, [flag]);

  return (
    <div className="App">
      <h1>List of Borrowers</h1>
      {/* Card for giving reputation score to user account */}

      {data?.map((nft, index) => (
        <div className="card" key={index}>
          <div className="item" style={{ width: "100%" }}>
            <table>
              <tbody>
                <tr>
                  <td className="title" style={{ fontWeight: "bold" }}>
                    Customer
                  </td>
                  <td className="desc" style={{ fontWeight: "bold" }}>
                    #{index + 1}
                  </td>
                </tr>
                <tr>
                  <td className="title">Account ID:</td>
                  <td className="desc">{nft.account}</td>
                </tr>
                <tr>
                  <td className="title">Car borrowed:</td>
                  <td className="desc">{nft.balance}</td>
                </tr>
              </tbody>
            </table>
            {/* Button for borrowing the car */}
            <div className="btn-container">
              <ScoreForm index={index} account={nft.account} giveScore={giveScore} flag={flag} setFlag={setFlag} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GiveScore;
