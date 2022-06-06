
module.exports = async function (taskArgs, hre) {
  const rektWolfNFT = await ethers.getContract("RektWolfNFT");
  console.log(`[source] rektWolfNFT.address: ${rektWolfNFT.address}`);

  try {
    let tx = await (await rektWolfNFT.publicMint()).wait();
    console.log(`✅ [${hre.network.name}] mint()`);
    console.log(` tx: ${tx.transactionHash}`);
    let onftTokenId = await ethers.provider.getTransactionReceipt(
      tx.transactionHash
    );
    console.log(
      ` ONFT nftId: ${parseInt(Number(onftTokenId.logs[0].topics[3]))}`
    );
  } catch (e) {
    if (e.error?.message.includes("ONFT: Max limit reached")) {
      console.log("*ONFT: Max limit reached*");
    } else {
      console.log(e);
    }
  }
};
