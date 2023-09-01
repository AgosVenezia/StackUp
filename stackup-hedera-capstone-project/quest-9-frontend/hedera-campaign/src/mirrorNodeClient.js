export class MirrorNodeClient {
  url = "https://mainnet-public.mirrornode.hedera.com/";
  constructor(network) {
    if (network === "testnet") {
      this.url = "https://testnet.mirrornode.hedera.com/";
    } else if (network === "previewnet") {
      this.url = "https://previewnet.mirrornode.hedera.com/";
    }
  }

  async getAccountInfo(accountId) {
    const accountInfo = await fetch(`${this.url}api/v1/accounts/` + accountId, { method: "GET" });
    const accountInfoJson = await accountInfo.json();
    return accountInfoJson;
  }

  async getContractInfo(scAddress) {
    const scInfo = await fetch(`${this.url}api/v1/contracts/` + scAddress, { method: "GET" });
    const scInfoJson = await scInfo.json();
    return scInfoJson;
  }
}
