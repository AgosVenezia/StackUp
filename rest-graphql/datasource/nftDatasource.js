const { RESTDataSource } = require("apollo-datasource-rest");

// CryptoPunks NFT Contract Address
const contract_address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"

// NFTData Source class
class NFTDataSource extends RESTDataSource {
    constructor() {
     super();
     this.baseURL = "https://deep-index.moralis.io/api/v2/nft";
    }
   
    async nftsByContract() {
     return this.get(
      `${contract_address}?limit=10`,
      {},
      {
       headers: {
        accept: "application/json",
        "X-API-KEY": process.env.MORALIS_API,
       },
      }
     );
    }
   
    async nftsTransfersByContract() {
     return this.get(
      `${contract_address}/transfers?limit=10`,
      {},
      {
       headers: {
        accept: "application/json",
        "X-API-KEY": process.env.MORALIS_API,
       },
      }
     );
    }
   }
   
   module.exports = NFTDataSource;