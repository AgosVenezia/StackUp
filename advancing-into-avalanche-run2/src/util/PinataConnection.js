import axios from "axios";
import FormData from "form-data";

const API_KEY = "84420b3e2720d233add4";
const API_SECRET = "d13c3050a01ecf7abb4640be14ff506e28a034985e2dd4f2f5c6919ceee253a1";

export default async function uploadImage(fileLocation, fileName) {
  const response = await axios.get(fileLocation, {
    responseType: "blob",
  });
  return await uploadToPinata(response.data, fileName);
}

async function uploadToPinata(image, name) {
  // put file into form data
  const formData = new FormData();
  formData.append("file", image, name);

  // the endpoint needed to upload the file
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  const response = await axios.post(url, formData, {
    maxContentLength: "Infinity",
    headers: {
      "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
      pinata_api_key: API_KEY,
      pinata_secret_api_key: API_SECRET,
    },
  });
  return { imageHash: response.data.IpfsHash };
}
