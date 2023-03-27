const CONTRACT_ADDRESS = "0x586020C8215fB6b65CFE5fAd98ff7631D6e037c4";
const META_DATA_URL = "ipfs://bafyreiew2qhkebw27steoqc3yy3vqtkg6vbq5rvjn6uoz65w6ofcp2npfu/metadata.json";

// Function to mint NFT
async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log("NFT minted to: ", owner.address);
 }

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
