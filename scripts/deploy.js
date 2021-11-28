const main = async () => {
    //compile it
    const nftContractFactory = await hre.ethers.getContractFactory("my_stream_nfts");

    //deploy it
    const nftContract = await nftContractFactory.deploy();

    //waiting to mine
    await nftContract.deployed();
    console.log("OGB LLC, Contract deployed to --", nftContract.address);

  //mint NFT
  
    let txn = await nftContract.makeAnEpicNFT()
  await txn.wait()

    txn = await  nftContract.makeAnEpicNFT()
    await txn.wait()

    console.log("OGB LLC, NFTs Have been Minted")
};
  
  
const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  runMain();

async function newFunction(nftContract) {
  let txn = await nftContract.makeAnEpicNFT();
  await txn.wait();
  return txn;
}
