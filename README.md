# Blockchain tracker example
Tracks Ether and Token transfers for given wallets and amount. [Read more on Medium](https://medium.com/pixelpoint/track-blockchain-transactions-like-a-boss-with-web3-js-c149045ca9bf).

## Requirements
- [Node 8+](https://nodejs.org/en/)
- [Yarn (optional)](https://yarnpkg.com/en/)

## Setup

```
git clone git@github.com:dsemenovsky/blockchain-tracker-example.git
cd blockchain-tracker-example
yarn install
```

Fill .env from .env.example with the token contract address, wallets and amount.
Pluton token contract is provided for this example.

```
NODE_ENV=development

INFURA_URL=https://rinkeby.infura.io/CUNjkZ8qg6WZHqeFNJyL
INFURA_WS_URL=wss://rinkeby.infura.io/ws

ETH_BLOCK_TIME=30

TOKEN_CONTRACT_ADDRESS=0xb4e95c65c23cab8c4fcaf15e4936c392e6ab21bf

WALLET_FROM=
WALLET_TO=
AMOUNT=
```

## Running

Simply start the service and make a transfer from one wallet to another on Rindkeby testnet.

```
yarn start
```
