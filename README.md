# The basisc of interacting with a Crypto Wallet from the browser

## Description

This project is a super simple demo of how to sign/validate messages & send Ether by leveraging an installed crypto wallet browser extension. Originally it was used for a lnl demo but you can also refernce it for an example of how to get a gateway to Ethereum set up and run operations over it.

There are 3 simple forms. Each is its own self contained component. Nothin fancy.
1. SignMessage: Triggers giving user permission to access the wallet and then accepts a message and asks the wallet to sign it. This will trigger a UI where the user will be asked to sign the message.
2. Validate Signed Message: Demonstrates how given the message & the signature the Ethereum address / Public Key can be derived which serves as a verification that the given user has control of the given wallet. This would typically take place on a server.
3. Pay: Send Ether to another Ethereum address.

## Dependencies & Useful Links

- React: [https://reactjs.org/](https://reactjs.org/)
- MetaMask: [https://metamask.io/](https://metamask.io/)
- Ethers: [https://docs.ethers.io/v5/](https://metamask.io/)
- Etherscan: [https://ropsten.etherscan.io/](https://ropsten.etherscan.io/)
- Faucet: [https://faucet.ropsten.be/](https://faucet.ropsten.be/)
- Eth Converter: [https://eth-converter.com/](https://faucet.ropsten.be/)

- React/JS
- MetaMask wallet
  - knows how to
    => Query the Blockchain
    => Write to the Blockchain
    => Interact with Contracts (call methods of on chain programs)
    => Listen to current Events on chain (e.g call a handler method when any transfer occours)
    => Query historical events
    => Sign messages
    => keeps the users private key secret and manages access to the public key and other info like account balances
    => a pretty good UI for the user to inteact with like a bank account, confirm tx, authorize info access and so on
- Etherscan so we can search tx on the chain and make sure that we have built worked
- Ethers JS (a newer alternative to the web3js library you may have heard of)
- Faucet so we can add fake internet money to our account
- Ethereum and test networks (specifically Rostpen test network)

## Usage
- Make sure to have the crypto wallet [Metamask](https://metamask.io/) installed and working.
- ** Make sure to select one of the test networks in the Wallet. Otherwise it is real Internet Money you are sending! **

```
// navigate to the directory where you keep your projects
git clone https://github.com/lazerblasters/lnl-web3-wallet-basics 
cd lnl-web3-wallet-basics
npm install
npm start // to run on localhost:3000
// npm build to build
```

