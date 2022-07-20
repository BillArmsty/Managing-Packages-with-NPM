async function main() {
    const StizoAgain = await ethers.getContractFactory("StizoAgain");
 
    
    const stizo_again = await StizoAgain.deploy("Stizo Again!");
    console.log("Contract deployed to address:", stizo_again.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });