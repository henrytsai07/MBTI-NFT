import Button from "react-bootstrap/Button";
import { utils, ethers } from "ethers";
import Whitelist from "./Whitelist";
import React from "react";
import animate from "../assets/bunny_gif.gif";

const ABI = [
  {
    inputs: [
      { internalType: "string", name: "_tokenName", type: "string" },
      { internalType: "string", name: "_tokenSymbol", type: "string" },
      { internalType: "uint256", name: "_cost", type: "uint256" },
      { internalType: "uint256", name: "_maxSupply", type: "uint256" },
      { internalType: "uint256", name: "_maxMintAmountPerTx", type: "uint256" },
      { internalType: "string", name: "_hiddenMetadataUri", type: "string" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
  { inputs: [], name: "ApprovalQueryForNonexistentToken", type: "error" },
  { inputs: [], name: "ApprovalToCurrentOwner", type: "error" },
  { inputs: [], name: "ApproveToCaller", type: "error" },
  { inputs: [], name: "BalanceQueryForZeroAddress", type: "error" },
  { inputs: [], name: "MintToZeroAddress", type: "error" },
  { inputs: [], name: "MintZeroQuantity", type: "error" },
  { inputs: [], name: "OwnerQueryForNonexistentToken", type: "error" },
  { inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
  { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
  { inputs: [], name: "TransferToNonERC721ReceiverImplementer", type: "error" },
  { inputs: [], name: "TransferToZeroAddress", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cost",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hiddenMetadataUri",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxMintAmountPerTx",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merkleRoot",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_mintAmount", type: "uint256" }],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_mintAmount", type: "uint256" },
      { internalType: "address", name: "_receiver", type: "address" },
    ],
    name: "mintForAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "revealed",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_cost", type: "uint256" }],
    name: "setCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_hiddenMetadataUri", type: "string" },
    ],
    name: "setHiddenMetadataUri",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_maxMintAmountPerTx", type: "uint256" },
    ],
    name: "setMaxMintAmountPerTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "_merkleRoot", type: "bytes32" }],
    name: "setMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_state", type: "bool" }],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_state", type: "bool" }],
    name: "setRevealed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_uriPrefix", type: "string" }],
    name: "setUriPrefix",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_uriSuffix", type: "string" }],
    name: "setUriSuffix",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_state", type: "bool" }],
    name: "setWhitelistMintEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uriPrefix",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "uriSuffix",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    name: "walletOfOwner",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "whitelistClaimed",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_mintAmount", type: "uint256" },
      { internalType: "bytes32[]", name: "_merkleProof", type: "bytes32[]" },
    ],
    name: "whitelistMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "whitelistMintEnabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const ADDRESS = "0xFA384952403e661F8C702c69C4Ec9C335da38a4a";

export class MintPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_address: null,
      contract: null,
      isConnected: false,
      isWhiteListSale: false,
      isOpenSale: false,
      nftCost: 0,
      count: 0 
    };
  }

  connectwallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const my_contract = new ethers.Contract(ADDRESS, ABI, signer);
      this.setState({
        user_address: accounts[0],
        contract: my_contract,
        isWhiteListSale: await my_contract.whitelistMintEnabled(),
        isOpenSale: !(await my_contract.paused()),
        nftCost: await my_contract.cost(),
        isConnected: true,
      });
      console.log(this.state);
    }
  };

  //Don't touch this function when styling
  mint = async () => {
    console.log(this.state);
    if (window.ethereum && this.state.isConnected) {
      var _mintAmount = Number(document.querySelector("[name=amount]").value);
      try {
        // Will need to change this
        const cost = await this.state.contract.cost();
        const response = await this.state.contract.mint(_mintAmount, {
          value: cost.mul(_mintAmount),
        });
        console.log("success response:", response);
      } catch (err) {
        console.log("mint err:", err);
      }
    }
  };

  whiteListMint = async () => {
    if (window.ethereum && this.state.isConnected) {
      var _mintAmount = Number(document.querySelector("[name=amount]").value);
      try {
        // Will need to change this
        const cost = await this.state.contract.cost();

        const response = await this.state.contract.whitelistMint(
          _mintAmount,
          Whitelist.getProofForAddress(this.state.user_address),
          { value: cost.mul(_mintAmount) }
        );

        console.log("success response:", response);
      } catch (err) {
        console.log("mint err:", err);
      }
    }
  };

  collectionStatus = () => {
    if (!this.state.isConnected) {
      return "Please connect your wallet.";
    }
    if (this.state.isWhiteListSale) {
      return "Whitelist Sale";
    }
    if (this.state.isOpenSale) {
      return "Public Sale";
    }
    return "Sale is not open yet. Please check back for more details";
  };

  mintButton = () => {
    if (this.state.isWhiteListSale) {
      if (Whitelist.contains(this.state.user_address)) {
        return (
          <Button onClick={this.whiteListMint}>Mint(WhiteList Only)</Button>
        );
      } else {
        return (
          <p>
            You address is not in the whitelist, please wait for public sale
          </p>
        );
      }
    }
    if (this.state.isConnected && this.state.isOpenSale) {
      return <Button onClick={this.mint}>Mint</Button>;
    }
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  // Please style this page here
  render() {
    return (
      <div className="mint">
        <div className="container">
          <div className="content">
            <h4 className="title">Mint Portal</h4>
            <h5>Please connect your wallet</h5>
            <Button onClick={this.connectwallet}>Connect Wallet</Button>
            <div id="wallet-address">
              <label for="floatingInput">
                Wallet Address: {this.state.user_address}
              </label>
            </div>
            <div>
              <input
                type="number"
                name="amount"
                defaultValue="1"
                min="1"
                max="5"
              />
              <label>Please select the amount of NFTs to mint.</label>
              {this.mintButton()}
            </div>
            <div>
              <button onClick={this.decrement}>-</button>
              <span>{this.state.count}</span>
              <button onClick={this.increment}>+</button>
            </div>
            <h5>Current status: {this.collectionStatus()}</h5>
            <h5>
              Price {utils.formatEther(this.state.nftCost)} ETH each mint.
            </h5>
          </div>
          <div className="image-container">
            <div className="image-container">
              <div className="image">
                <img src={animate} alt="home image" />
              </div>
              <div className="ellipse-container">
                <div className="ellipse pink"></div>
                <div className="ellipse orange"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
