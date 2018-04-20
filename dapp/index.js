const Web3 = require('web3')
const web3 = new Web3('http://localhost:8545')

const { abi } = require('../build/contracts/HelloCoin.json')

// 1. Replace this address with your contract address
const helloCoin = new web3.eth.Contract(abi, '0x62d3a560f5c6b4fdeef74db3febd5a9f2ba8a011')

console.log('Contract Address => ', helloCoin.options.address)
console.log('Contract Interface => ', helloCoin.methods, '\n')

// 2. Replace this private key from your account private key ('0x' is fixed)
const privateKey = '0x' + '45a6507384d64d148d3e949473da236d750eaf8e23942fc272710319dff7eb6f'
const account = web3.eth.accounts.privateKeyToAccount(privateKey)
const wallet = web3.eth.accounts.wallet.create(0)
wallet.add(account)

console.log('Account Address => ', account.address)
web3.eth.getBalance(account.address)
  .then(balance => console.log('Account Balance => ', balance, '\n'))


helloCoin.methods.mint(account.address, 1000).estimateGas({ from: account.address })
  .then(gas => console.log('Estimate Gas', gas))
  .catch(console.log)

helloCoin.methods.mint(account.address, 1000).send({ from: account.address, gas: 43814 })
  .then(receipt => {
    console.log('TX Receipt', receipt)
    return helloCoin.methods.getBalance(account.address).call({ from: account.address })
  })
  .then(balance => console.log('Hello Coin Balance', balance))
  .catch(console.log)

