module.exports = async function (taskArgs, hre) {
    const rektWolfNFT = await ethers.getContract("RektWolfNFT");
    const owner = taskArgs.walletAddress;
    const str = taskArgs.assignTokenList;
    const assignToken = str.split(",");
    try {
        let tx = await (await rektWolfNFT.setLedger(owner, assignToken)).wait();
        console.log(`✅ [${hre.network.name}] setLedger(${owner}, ${assignToken})`);
        console.log(` tx: ${tx.transactionHash}`);
    } catch (e) {
        console.log(e);
    }
};
