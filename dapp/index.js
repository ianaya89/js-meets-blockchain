const Web3 = require('web3')
const web3 = new Web3('http://localhost:8545')

const { abi } = require('../build/contracts/HelloCoin.json')
const helloCoin = new web3.eth.Contract(abi, '0xdcc751b0bb05b31e261298d505d972820cbdcbcb') // 1

console.log('Contract Address => ', helloCoin.options.address)
console.log('Contract Interface => ', helloCoin.methods, '\n')

const privateKey = '0x' + 'bcd23bf93cc3d0038144905f090e9680b4578aecb3dccb27308f506234612bdc' // 2
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

