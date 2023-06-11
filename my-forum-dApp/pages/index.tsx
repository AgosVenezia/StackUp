/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState, useCallback } from "react";
import { Web3Storage, File } from "web3.storage";
import Modal from "react-modal";
import { ethers } from "ethers";
import Link from "next/link";
import axios from "axios";
import { useDropzone } from "react-dropzone";

//ABIs
import postABI from "../utils/postABI.json";
import postManagerABI from "../utils/postManagerABI.json";

type Comment = {
  comment_address: string;
  comment_content: string;
};

type Post = {
  post_ID: number;
  post_title: string;
  post_content: string;
  poster_address: string;
  comments: Comment[];
};

type PostDetail = {
  postId: number;
  postTitle: string;
  postContent: string;
  posterWalletAddress: string;
  noOfComments: number;
  postSCAddress: string;
  comments: Comment[];
  imageCID: string;
  imageFilename: string;
};

export default function Home() {
  const postManagerContract = "0x586020C8215fB6b65CFE5fAd98ff7631D6e037c4"; //postManager smart contract address

  //variables
  const [token, setToken] = useState<string>("");

  const [postTitle, setPostTitle] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);
  const [loadedData, setLoadedData] = useState("Loading...");

  const [currentWalletAddress, setCurrentWalletAddress] = useState<string>("");

  const [allPosts, setAllPosts] = useState<PostDetail[]>([]);
  const [noOfPosts, setNoOfPosts] = useState<number>(0);

  const [activePost, setPostToActive] = useState<PostDetail | null>(null);
  const [latestCid, setLatestCid] = useState<string>("");

  const [commentText, setCommentText] = useState<string>("");

  const [file, setFile] = useState<null | Buffer>(null);
  const [filename, setFilename] = useState<string>("");
  const [fileDetails, setFileDetails] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  function openModal() {
    setIsLoading(true);
  }

  function closeModal() {
    setIsLoading(false);
  }

  async function getAllPosts() {
    const { ethereum } = window;

    // Check if MetaMask is installed
    if (!ethereum) {
      return "Make sure you have MetaMask Connected!";
    }

    // Get user Metamask Ethereum wallet address
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    // Get the first account address
    const walletAddr = accounts[0];
    //set to variable to store current wallet address
    setCurrentWalletAddress(walletAddr);

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      //create contract instance
      const postManagerContractInstance = new ethers.Contract(
        postManagerContract,
        postManagerABI,
        signer
      );

      //(1) call the getPosts function from the contract to get all Posts contract addresses
      const allPostsAddresses = await postManagerContractInstance.getPosts();
      //(2) call getPostsData function from contract
      const allPosts = await postManagerContractInstance.getPostsData(
        allPostsAddresses
       );
      //(3) set latest cid using react set variable
      setLatestCid(allPosts.postCID);
      // declare new array
      let new_posts = [];

      //iterate and loop through the data retrieve from the blockchain
      for (let i = 0; i < allPosts.posterAddress.length; i++) {
        let posterWalletAddress: string = allPosts.posterAddress[i];
        let noOfComments: number = allPosts.numberOfComments[i].toNumber();
        let postSCAddress = allPostsAddresses[i];

        //get postId
        const postid = await postManagerContractInstance.postIDs(postSCAddress);

        if (allPosts.postCID !== 0) {
          //get file data using axios from url
          let config: any = {
            method: "get",
            url: `https://${allPosts.postCID}.ipfs.w3s.link/post.json`,
            headers: {},
          };

          const axiosResponse = await axios(config);
          const postDataObject: Post[] = axiosResponse.data;

          const getCurrentPostTitle = postDataObject.filter(
            (data) => data.post_ID === postid.toNumber()
          )[0].post_title;

          const getCurrentPostContent = postDataObject.filter(
            (data) => data.post_ID === postid.toNumber()
          )[0].post_content;

          //Data of each Post
          let newPost: PostDetail = {
            postTitle: getCurrentPostTitle,
            postContent: getCurrentPostContent,
            postId: postid.toNumber(),
            posterWalletAddress, //user wallet address
            noOfComments,
            postSCAddress, //Post smart contract address
            comments: [],
            imageCID: "", //set to empty string
            imageFilename: "", //set to empty string
          };

          new_posts.push(newPost);
        }
      }

      setAllPosts(new_posts);
      setNoOfPosts(allPosts.posterAddress.length);
    }
  }

  async function createPost() {
    try {
      //check required fields
      if (!postTitle || !postContent) {
        return alert("Fill all the fields!!");
      }

      //check if user has uploaded a file
      if (file == null) {
        return alert("Please upload a image file before proceeding.");
      }

      setLoadedData("Creating post ...Please wait");
      openModal();

      const storage = new Web3Storage({ token });

      //no post added, no need to get existing file from ipfs
      if (noOfPosts === 0) {
        const postObj: Post[] = [
          {
            post_ID: noOfPosts,
            post_title: postTitle,
            post_content: postContent,
            poster_address: currentWalletAddress,
            comments: [], // no comments when creating a new post, set to empty array
          },
        ];
        const buffer = Buffer.from(JSON.stringify(postObj));

        //(4) call web3.storage API function to store data on IPFS as JSON
        const files = [new File([buffer], "post.json")];
        const cid = await storage.put(files);
        setLatestCid(cid);
        //store image on IPFS
        const imageFile = [new File([file], filename)];
        const imageCid = await storage.put(imageFile);

        closeModal();

        const { ethereum } = window;

        if (ethereum) {
          //set loading modal to open and loading modal text
          setLoadedData("Creating Post...Please wait");
          openModal();

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();

          //create post manager contract instance
          const postManagerContractInstance = new ethers.Contract(
            postManagerContract,
            postManagerABI,
            signer
          );

          // (5) call postManager create post function from the contract
          let { hash } = await postManagerContractInstance.createPost(
            cid,
            imageCid,
            filename,
            {
             gasLimit: 1200000,
            }
           );
          // (6) wait for transaction to be mined
          await provider.waitForTransaction(hash);
          // (7) display alert message
          alert(`Transaction sent! Hash: ${hash}`);
        }

        //call getAllPosts function to refresh the current list of post
        await getAllPosts();

        //reset fields back to default values
        setPostTitle("");
        setPostContent("");

        setFile(null);
        setFileDetails("");
        setFilename("");

        //close modal
        closeModal();
      } else {
        //get existing file data from ipfs link
        let config: any = {
          method: "get",
          url: `https://${latestCid}.ipfs.w3s.link/post.json`,
          headers: {},
        };

        const axiosResponse = await axios(config);
        const postDataObject: Post[] = axiosResponse.data;

        let postObj: Post = {
          post_ID: noOfPosts,
          post_title: postTitle,
          post_content: postContent,
          poster_address: currentWalletAddress,
          comments: [],
        };
        postDataObject.push(postObj);

        //store new JSON object in IPFS
        const buffer = Buffer.from(JSON.stringify(postDataObject));

        const newfile = [new File([buffer], "post.json")];
        const cid = await storage.put(newfile);

        //store image on IPFS
        const imageFile = [new File([file], filename)];
        const imageCid = await storage.put(imageFile);

        setLatestCid(cid);
        closeModal();

        //call smart contract function
        const { ethereum } = window;

        if (ethereum) {
          //set loading modal to open and loading modal text
          setLoadedData("Creating Post...Please wait");
          openModal();

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();

          //create post manager contract instance
          const postManagerContractInstance = new ethers.Contract(
            postManagerContract,
            postManagerABI,
            signer
          );

          //call create post function from the postManager contract
          let { hash } = await postManagerContractInstance.createPost(
            cid,
            imageCid,
            filename,
            {
              gasLimit: 1200000,
            }
          );

          //wait for transaction to be mined
          await provider.waitForTransaction(hash);

          //display alert message
          alert(`Transaction sent! Hash: ${hash}`);
        }
        //call getAllPosts to refresh the current list
        await getAllPosts();

        //reset fields back to default values
        setPostTitle("");
        setPostContent("");

        setFile(null);
        setFileDetails("");
        setFilename("");
        //close modal
        closeModal();
      }
    } catch (error) {
      console.log(error);
      closeModal();
      alert(`Error: ${error}`);
      return `${error}`;
    }
  }

  async function postComment(postData: PostDetail) {
    try {
      if (!commentText) {
        return alert("Fill all the fields required!!");
      }

      setLoadedData("Storing comment ...Please wait");
      openModal();

      //call web3.storage API function
      const storage = new Web3Storage({ token });

      let config: any = {
        method: "get",
        url: `https://${latestCid}.ipfs.w3s.link/post.json`,
        headers: {},
      };

      const axiosResponse = await axios(config);
      const postDataObject: Post[] = axiosResponse.data;

      //filter and get the rest of the post data
      let otherPostData: Post[] = postDataObject.filter(
        (data) => data.post_ID !== postData.postId
      );

      //filter out to get current post data to add comment object in
      let getCurrentPostData: Post = postDataObject.filter(
        (data) => data.post_ID === postData.postId
      )[0];

      const userComment = {
        comment_address: currentWalletAddress,
        comment_content: commentText,
      };

      //add new comment into comment array
      getCurrentPostData.comments.push(userComment);

      //add back current post data back into rest of the post data
      otherPostData.push(getCurrentPostData);

      //store new JSON object in IPFS
      const buffer = Buffer.from(JSON.stringify(otherPostData));

      const newfile = [new File([buffer], "post.json")];
      const newCid = await storage.put(newfile);

      setLatestCid(newCid);
      closeModal();

      //call smart contract function
      const { ethereum } = window;

      if (ethereum) {
        //set loading modal to open and loading modal text
        setLoadedData("submitting comment...Please wait");
        openModal();

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        //create contract instance
        const postManagerContractInstance = new ethers.Contract(
          postManagerContract,
          postManagerABI,
          signer
        );

        // (8) call postManager addComment function from the contract
        let { hash } = await postManagerContractInstance.addComment(
          newCid,
          postData.postSCAddress,
          {
           gasLimit: 1200000,
          }
         );
        // (9) wait for transaction to be mined
        await provider.waitForTransaction(hash);
        // (10) display alert message
        alert(`Transaction sent! Hash: ${hash}`);
        //call getAllPosts to refresh the current list
        await getAllPosts();

        //reset fields back to default values
        setCommentText("");

        //call setActivePost to get updated comments
        await setActivePost(postData, newCid);

        //close modal
        closeModal();
      }
    } catch (error) {
      console.log(error);
      closeModal();
      alert(`Error: ${error}`);
      return `${error}`;
    }
  }

  async function setActivePost(postData: PostDetail, updatedCid: string) {
    try {
      setLoadedData("Getting post details ...Please wait");
      openModal();

      let config: any = {
        method: "get",
        url: `https://${updatedCid}.ipfs.w3s.link/post.json`,
        headers: {},
      };

      const axiosResponse = await axios(config);
      const postDataObject: Post[] = axiosResponse.data;

      const currentPostData: Post = postDataObject.filter(
        (data) => data.post_ID === postData.postId
      )[0];

      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        //create contract instance
        const postContractInstance = new ethers.Contract(
          postData.postSCAddress,
          postABI,
          signer
        );

        const imageName = await postContractInstance.imageName();
        const imageCid = await postContractInstance.imageCID();

        setImageUrl(`https://${imageCid}.ipfs.w3s.link/${imageName}`);

        setPostToActive({
          ...postData,
          comments: currentPostData.comments,
          imageCID: imageCid,
          imageFilename: imageName,
        });
      }

      closeModal();
    } catch (error) {
      console.log(error);
      closeModal();
      alert(`Error: ${error}`);
      return `${error}`;
    }
  }

  async function getWeb3StorageAPIkey() {
    const key = process.env.NEXT_PUBLIC_WEB3_STORAGE_API_KEY;
    if (key != undefined) {
      setToken(key);
    }
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      color: "black ",
    },
  };

  //upload file function
  function MyDropzone() {
    const onDrop = useCallback((acceptedFiles: any) => {
      const file = acceptedFiles[0];

      //check if file exists
      if (file == null) {
        throw "file error";
      }

      if (file) {
        //set file details into state variables
        setFilename(file.path);
        setFileDetails(`${file.path} - ${file.size} bytes`);
      }

      //read file data with file reader function
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend = function () {
        const arraybufferData = reader.result;

        if (arraybufferData == null || typeof arraybufferData === "string") {
          throw "buffer error";
        }

        const buffer: any = Buffer.from(new Uint8Array(arraybufferData));
        //set file data into state variable
        setFile(buffer);
      };
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      multiple: false, //restrict only only 1 file to be choosen
      accept: {
        //restrict allow only jpeg/png/jpg file to be uploaded
        "image/png": [".png"],
        "image/jpeg": [".jpeg"],
        "image/jpg": [".jpg"],
      },
    });

    return (
      <div className={styles.dropZoneStyle} {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>
            Drag and drop your Image file here, or click to select file ((Only
            *.jpeg, *jpg and *.png images will be accepted))
          </p>
        )}
      </div>
    );
  }

  //render functions
  function renderAllPosts(allPosts: PostDetail) {
    return (
      <div className={styles.createPostContainer}>
        <p className={styles.paragraphText}>Post ID: {allPosts.postId + 1}</p>
        <h4 className={styles.paragraphText}>
          Post Title: {allPosts.postTitle}
        </h4>
        <p className={styles.paragraphText}>
          Posted by: {allPosts.posterWalletAddress}
        </p>
        <p className={styles.paragraphText}>
          No of comments : {allPosts.noOfComments}
        </p>
        <button
          className={styles.viewPostBtn}
          onClick={() => {
            setActivePost(allPosts, latestCid);
          }}
        >
          View Post
        </button>
      </div>
    );
  }

  function renderActivePost(postData: PostDetail) {
    return (
      <div className={styles.activePostContainer}>
        <div>
          <div style={{ paddingLeft: "40px" }}>
            <h1 className={styles.paragraphText}>{postData.postTitle} </h1>
          </div>
          <div style={{ display: "flex" }}>
            <p className={styles.detailsText}>Post Smart contract address: </p>
            <p className={styles.hyperlinkText}>
              <Link
                href={`https://sepolia.etherscan.io/address/${postData.postSCAddress}`}
                target="_blank"
              >
                {postData.postSCAddress}
              </Link>
            </p>
          </div>
          <p className={styles.detailsText}>
            Posted by: {postData.posterWalletAddress}{" "}
          </p>
          <div style={{ display: "flex" }}>
            <p className={styles.detailsText}>CID: </p>
            <p className={styles.hyperlinkText}>
              <Link
                href={`https://${latestCid}.ipfs.w3s.link/post.json`}
                target="_blank"
              >
                {latestCid}
              </Link>
            </p>
          </div>
          {/* image file */}
          <img
            src={imageUrl}
            alt="your image file"
            width={300}
            height={300}
            style={{ paddingLeft: "45px" }}
          />
          <h4 className={styles.activePostText}>{postData.postContent} </h4>
        </div>
        <div
          style={{
            padding: "5px",
          }}
        >
          <div>
            <h4 className={styles.commentHeading}>
              {(() => {
                if (postData.comments.length === 1) {
                  return <div>{`${postData.comments.length} Comment`}</div>;
                } else {
                  return <div>{`${postData.comments.length} Comments`}</div>;
                }
              })()}
            </h4>

            {postData.comments.map((data) => {
              return (
                <>
                  <div
                    style={{
                      border: "0",
                      borderBottom: "2px",
                      marginLeft: "35px",
                      borderStyle: "solid",
                    }}
                  >
                    <div
                      style={{ margin: "10px" }}
                    >{`Comment by: ${data.comment_address}`}</div>
                    <div
                      style={{ margin: "10px" }}
                    >{`Comment:  ${data.comment_content}`}</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: "20px", marginLeft: "50px" }}>
          <label>Add Comment</label>
          <input
            type="text"
            placeholder="Enter text here"
            onChange={(e) => setCommentText(e.target.value)}
            value={commentText}
            style={{
              padding: "15px",
              textAlign: "center",
              display: "block",
              backgroundColor: "black",
              color: "white",
              width: "400px",
              marginBottom: "10px",
            }}
          />
        </div>

        <div
          style={{
            marginLeft: "50px",
          }}
        >
          <button
            className={styles.postCommentBtn}
            onClick={() => postComment(postData)}
          >
            Submit comment
          </button>

          <button
            className={styles.backBtn}
            onClick={() => setPostToActive(null)}
          >
            Back to home page
          </button>
        </div>
      </div>
    );
  }

  useEffect(() => {
    getAllPosts();
    getWeb3StorageAPIkey();
  }, []);

  return (
    <>
      <Head>
        <title>Forum dApp</title>

        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images.png" />
      </Head>

      <div
        style={{
          backgroundColor: "white",
          minWidth: "500px",
          paddingBottom: "10px",
        }}
      >
        <div className={styles.topPanel}>
          <div className={styles.walletAddress}>{`Forum dAPP`}</div>
          <div className={styles.walletAddress}>
            {`Wallet Address: ${currentWalletAddress}`}
          </div>
        </div>

        <Modal
          isOpen={isLoading}
          //onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {loadedData}
        </Modal>
        <h2 className={styles.allPosts}>
          {(() => {
            if (activePost == null) {
              return <div>{`All Posts`}</div>;
            } else {
              return <div>{``}</div>;
            }
          })()}
        </h2>

        <div>
          {activePost != null ? (
            renderActivePost(activePost)
          ) : (
            <>
              <div>{allPosts.map((post) => renderAllPosts(post))}</div>
              <div className={styles.createPostContainer}>
                <h2 className={styles.createPostText}>Create New Post </h2>
                <MyDropzone />
                <p style={{ paddingLeft: "20px" }}>{`${fileDetails}`}</p>
                <div style={{ margin: "20px" }}>
                  <div style={{ marginTop: "20px" }}>
                    <label>Post Title</label>
                    <input
                      type="text"
                      placeholder="Add Post title here"
                      onChange={(e) => setPostTitle(e.target.value)}
                      value={postTitle}
                      style={{
                        padding: "15px",
                        textAlign: "center",
                        display: "block",
                        backgroundColor: "black",
                        color: "white",
                        width: "400px",
                        marginBottom: "10px",
                      }}
                    />
                  </div>

                  <div style={{ marginTop: "20px" }}>
                    <label>Post Content</label>
                    <input
                      type="text"
                      placeholder="Add Post Content here"
                      onChange={(e) => setPostContent(e.target.value)}
                      value={postContent}
                      style={{
                        padding: "15px",
                        textAlign: "center",
                        display: "block",
                        backgroundColor: "black",
                        color: "white",
                        width: "400px",
                        marginBottom: "10px",
                      }}
                    />
                  </div>

                  <button
                    type="button"
                    className={styles.createPostBtn}
                    onClick={() => createPost()}
                  >
                    Create a new Post
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
