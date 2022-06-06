task(
  "rektWolfSetTrustedRemote",
  "setTrustedRemote(chainId, sourceAddr) to allow the local contract to send/receive messages from known source contracts",
  require("./rektWolfSetTrustedRemote")
).addParam(
  "targetNetwork",
  "the target network to let this instance receive messages from"
);

//
task(
  "RektWolfOwnerOf",
  "ownerOf(tokenId) to get the owner of a token",
  require("./RektWolfOwnerOf")
).addParam("tokenId", "the tokenId of ONFT");


task("RektWolfMint", "mint() mint ONFT", require("./RektWolfMint"));

//
task(
  "RektWolfSend",
  "send an ONFT nftId from one chain to another",
  require("./RektWolfSend")
)
  .addParam("targetNetwork", "the chainId to transfer to")
  .addParam("tokenId", "the tokenId of ONFT");

task(
  "RektWolfSetLedger",
  "set wallet address to mint nfts",
  require("./RektWolfSetLedger")
).addParam("walletAddress", "the wallet address to mint nfts")
  .addParam("assignTokenList", "the tokenId of ONFT");