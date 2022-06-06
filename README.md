# Pozzle Planet Protocol Development

#### Local setup

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone https://github.com/PozzlePlanet/protocol-development.git

cd protocol-development

# install using NPM or Yarn
npm install

# or

yarn
```

2. Start the local Hardhat node

```sh
npx hardhat node
```

3. Deploy the contracts to the EVM chain or local network in a separate terminal window

Copy the .env.example file to a file named .env, and then edit it to fill in the details.
Enter your PolygonScan API key, your Polygon node URL using Moralis Speedy Nodes, and the
private key of the account which will send the deployment transaction.
With a valid .env file in place, first deploy your contract:



```sh
npx hardhat deploy --network mumbai --tags RektWolfNFT

npx hardhat verify --network mumbai --constructor-args "args/mumbai.js" --contract "contracts/RektWolfNFT.sol:RektWolfNFT" [deployed address]

npx hardhat deploy --network rinkeby --tags RektWolfNFT

npx hardhat verify --network rinkeby --constructor-args "args/rinkeby.js" --contract "contracts/RektWolfNFT.sol:RektWolfNFT" [deployed address]

```

```sh
npx hardhat --network [from chain] rektWolfSetTrustedRemote --target-network [to chain]

```

Repeat above command line for all chains each other.


4. To test the contract run the test scripts in the test folder


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