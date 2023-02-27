import { ethers } from "ethers";
import { Info } from ".";

let tempProvider;
let tempSigner;
if (typeof window !== 'undefined' && window.ethereum) {
  tempProvider = new ethers.providers.Web3Provider(window.ethereum);
  tempSigner = tempProvider.getSigner();
}

let NFTcontract = new ethers.Contract(Info.Fundaddress, Info.ABI, tempSigner);




export async function balanceOf(address) {
  return await NFTcontract.balanceOf(address);
}

export async function Deposit(to,metadataURI, name,symbol, amount) {
  let tx = await NFTcontract.mint(to,metadataURI, name,symbol,amount);
  let receipt = await tx.wait();
  return receipt;
}


