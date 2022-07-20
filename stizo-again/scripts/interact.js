const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/StizoAgain.sol/StizoAgain.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const stizoAgainContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await stizoAgainContract.message();
    console.log("The message is: " + message);

    console.log("Updating the message...");
    const tx = await stizoAgainContract.update("this is the new message");
    await tx.wait();

    const newMessage = await stizoAgainContract.message();
    console.log("The new message is: " + newMessage);
}


 
main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});