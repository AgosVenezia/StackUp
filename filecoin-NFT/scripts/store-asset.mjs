import { NFTStorage, File } from "nft.storage";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.NFT_STORAGE_API_KEY;

// Function to store asset on NFT.Storage
async function storeAsset() {
  const client = new NFTStorage({ token: API_KEY });
  const file = await fs.promises.readFile("assets/myNFTimage.png");
  const metadata = await client.store({
   name: "Aguito",
   description: "I love Filecoin!",
   image: new File([file], "myNFTimage.png", { type: "image/png" }),
  });
  console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url);
 }

storeAsset()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
