import { useEffect, useState, useRef } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle,
  CircularProgress,
} from "@material-ui/core";
import Card from "./card";
import "./app.scss";
import {
  connectToWallet,
  getContract,
  mintNFT,
  configureTokenURI,
} from "./util/EtherJSFunctions";
import uploadImage from "./util/PinataConnection";

const uniqueElementsArray = [
  {
    type: "image 1",
    image: require(`./images/stackpe1.png`),
  },
  {
    type: "image 2",
    image: require(`./images/stackpe2.png`),
  },
  {
    type: "image 3",
    image: require(`./images/stackpe3.png`),
  },
  {
    type: "image 4",
    image: require(`./images/stackpe4.png`),
  },
];

function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
export default function App() {
  const [cards, setCards] = useState(
    shuffleCards.bind(null, uniqueElementsArray.concat(uniqueElementsArray))
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  const [contract, setContract] = useState(null);
  const [mintedNFTs, setMintedNFTs] = useState([]);
  const [wallet, setWallet] = useState(null);
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === uniqueElementsArray.length) {
      setShowModal(true);
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };
  const evaluate = async () => {
    const [first, second] = openCards;

    if (cards[first].type === cards[second].type) {
      const result = await uploadImage(cards[first].image, cards[first].type);
      const tokenURI = configureTokenURI(
        result.imageHash,
        cards[first].type,
        `This is an image of ${cards[first].type}`
      );
      const tx = await mintNFT(tokenURI, contract);
      // Take the nonce and the transaction ID
      const updatedNFTList = mintedNFTs;
      updatedNFTList.push({
        tokenId: tx.nonce,
        transactionId: tx.hash,
        ipfsLink: result.imageHash,
      });
      setMintedNFTs(updatedNFTList);
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      enable();
      return;
    }
    enable();
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };
  const handleCardClick = (index) => {
    if (wallet == null) {
      alert("Please refresh and connect to your Core wallet");
    } else if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(async () => {
    const signer = await connectToWallet();
    if ((await signer.getAddress()) !== "") {
      setWallet(signer);
      const erc721SC = await getContract(signer);
      setContract(erc721SC);
    }
  }, []);

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);
  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(shuffleCards(uniqueElementsArray.concat(uniqueElementsArray)));
  };

  const displayMintedNFTs = (nfts) => {
    return (
      <div>
        <div>Minted NFTs</div>
        {nfts.map((nft) => {
          return displayNFTData(nft);
        })}
      </div>
    );
  };
  const displayNFTData = ({ tokenId, transactionId, ipfsLink }) => {
    return (
      <div style={{ border: "solid" }}>
        <div> {`token ID: ${tokenId}`}</div>
        <div>
          <a href={`https://testnet.snowtrace.io/tx/${transactionId}`}>
            Link to snowtrace
          </a>
        </div>
        <div>
          <a href={`https://gateway.pinata.cloud/ipfs/${ipfsLink}`}>
            Link to Image
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <header>
        <h3>Play the Flip card game</h3>
        <div>
          Select two cards with same content consequtively to make them vanish
        </div>
      </header>
      <div className="container">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
      <footer>
        <div className="score">
          <div className="moves">
            <span className="bold">Moves:</span> {moves}
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span className="bold">Best Score:</span> {bestScore}
            </div>
          )}
        </div>
        <div className="restart">
          {shouldDisableAllCards ? (
            <div>
              <div>Minting NFT</div>
              <div style={{ textAlign: "center" }}>
                <CircularProgress />
              </div>
            </div>
          ) : (
            <Button onClick={handleRestart} color="primary" variant="contained">
              Restart
            </Button>
          )}
        </div>
        <div className="score">
          {mintedNFTs[0] == null
            ? "No NFT Minted"
            : displayMintedNFTs(mintedNFTs)}
        </div>
      </footer>
      <Dialog
        open={showModal}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Hurray!!! You completed the challenge
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You completed the game in {moves} moves. Your best score is{" "}
            {bestScore} moves.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestart} color="primary">
            Restart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
