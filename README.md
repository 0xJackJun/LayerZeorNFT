# Pozzle Planet Protocol Development

## Local setup

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone https://github.com/PozzlePlanet/protocol-development.git

cd rekt-wolf-nft

yarn install
```

2. Start the local Hardhat node

```sh
npx hardhat node
```
## Deploy to chain
1. Deploy the contracts to the EVM chain or local network in a separate terminal window

Copy the .env.example file to a file named .env, and then edit it to fill in the details.
Get the relevant network apis keys from https://polygonscan.com/, https://etherscan.io/ etc.

```sh
npx hardhat deploy --network mumbai --tags RektWolfNFT

npx hardhat verify --network mumbai --constructor-args "args/mumbai.js" --contract "contracts/RektWolfNFT.sol:RektWolfNFT" [deployed address]

npx hardhat deploy --network rinkeby --tags RektWolfNFT

npx hardhat verify --network rinkeby --constructor-args "args/rinkeby.js" --contract "contracts/RektWolfNFT.sol:RektWolfNFT" [deployed address]

```
To enable the transfer of NFT's fron one chain to another run below:
```sh
npx hardhat --network [from chain] rektWolfSetTrustedRemote --target-network [to chain]

```
Repeat above command line for all chains each other.


## Testing
1. To test the contract run the test scripts in the test folder


```sh
npx hardhat --network rinkeby RektWolfSetLedger --wallet-address [wallet address] --assign-token-list [token list, for example 1,2,3]

npx hardhat --network rinkeby RektWolfMint
```

```sh
npx hardhat --network rinkeby RektWolfOwnerOf --token-id 1

npx hardhat --network rinkeby RektWolfOwnerOf --token-id 2
```

```sh
npx hardhat --network rinkeby RektWolfSend --target-network mumbai --token-id 1
```

```sh
npx hardhat --network rinkeby RektWolfOwnerOf --token-id 1

npx hardhat --network mumbai RektWolfOwnerOf --token-id 1
```
## Add whitelist
* set ledger in one-time.
```sh
npx hardhat --network rinkeby SetLedgerOneTime
```
