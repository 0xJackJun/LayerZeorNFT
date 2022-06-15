const owner = require("../script/address.js");
const assignToken = require("../script/id.js");
module.exports = async function (taskArgs, hre) {
  const rektWolfNFT = await ethers.getContract("RektWolfNFT");
  a = owner.slice(0, 500);
  b = assignToken.slice(0, 500);
  try {
    let tx = await (await rektWolfNFT.setLedgerOneTime(a, b)).wait();
    console.log(`✅ [${hre.network.name}] setLedger(${owner}, ${assignToken})`);
    console.log(` tx: ${tx.transactionHash}`);
  } catch (e) {
    console.log(e);
  }
  //
  a = owner.slice(500, 1000);
  b = assignToken.slice(500, 1000);
  try {
    let tx = await (await rektWolfNFT.setLedgerOneTime(a, b)).wait();
    console.log(`✅ [${hre.network.name}] setLedger(${owner}, ${assignToken})`);
    console.log(` tx: ${tx.transactionHash}`);
  } catch (e) {
    console.log(e);
  }
  //
  a = owner.slice(1000, 1500);
  b = assignToken.slice(1000, 1500);
  try {
    let tx = await (await rektWolfNFT.setLedgerOneTime(a, b)).wait();
    console.log(`✅ [${hre.network.name}] setLedger(${owner}, ${assignToken})`);
    console.log(` tx: ${tx.transactionHash}`);
  } catch (e) {
    console.log(e);
  }
  //
  a = owner.slice(1500, 2000);
  b = assignToken.slice(1500, 2000);
  try {
    let tx = await (await rektWolfNFT.setLedgerOneTime(a, b)).wait();
    console.log(`✅ [${hre.network.name}] setLedger(${owner}, ${assignToken})`);
    console.log(` tx: ${tx.transactionHash}`);
  } catch (e) {
    console.log(e);
  }
  //
  a = owner.slice(2000, 2222);
  b = assignToken.slice(2000, 2222);
  try {
    let tx = await (await rektWolfNFT.setLedgerOneTime(a, b)).wait();
    console.log(`✅ [${hre.network.name}] setLedger(${owner}, ${assignToken})`);
    console.log(` tx: ${tx.transactionHash}`);
  } catch (e) {
    console.log(e);
  }
};
