const CHAIN_ID = require("../constants/chainIds.json");

module.exports = async function (taskArgs, hre) {
  const signers = await ethers.getSigners();
  const owner = signers[0];
  console.log(owner.address)
  const dstChainId = CHAIN_ID[taskArgs.targetNetwork];
  const tokenId = taskArgs.tokenId;
  const rektWolfNFT = await ethers.getContract("RektWolfNFT");
  console.log(`[source] rektWolfNFT.address: ${rektWolfNFT.address}`);

  let adapterParams = ethers.utils.solidityPack(
    ["uint16", "uint256"],
    [1, 200000]
  ); // default adapterParams example

  try {
    let tx = await (
      await rektWolfNFT.sendFrom(
        owner.address,
        dstChainId,
        owner.address,
        tokenId,
        owner.address,
        ethers.constants.AddressZero,
        adapterParams,
        {
          value: ethers.utils.parseEther("0.001"),
        }
      )
    ).wait();
    console.log(`✅ [${hre.network.name}] send(${dstChainId}, ${tokenId})`);
    console.log(` tx: ${tx.transactionHash}`);
  } catch (e) {
    // if (e.error.message.includes("Message sender must own the OmnichainNFT.")) {
    //   console.log("*Message sender must own the OmnichainNFT.*");
    // } else if (
    //   e.error.message.includes("This chain is not a trusted source source.")
    // ) {
    //   console.log("*This chain is not a trusted source source.*");
    // } else {
    //   console.log(e);
    // }
    console.log(e);
  }
};
