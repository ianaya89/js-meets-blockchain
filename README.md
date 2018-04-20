# 🤝 JS Meets The Blockchain Demo

> ⚠️ `ganache-cli` and `truffle` are set as dev deps, so no global installation is needed.

## Install Contract Deps

- `$ npm i`

## Install Dapp Deps

1. `cd dapp`
2. `npm i`

## Deploy Contracts in Local Network

1. `npm run node` > this starts ganache-cli
2. `npm run deploy` > this runs truffle migrate

## Test Contracts in Local Network

1. `npm run node` > this starts ganache-cli
2. `npm run test` > thisruns truffle test

## Run Demo DApp

1. Open `./dapp/index` file.
2. Replace contract address with the new deployed contract address provided by `ganache-cli`
3. Replace private key account with one provided by `ganache-cli`
1. `npm run dapp` // runs code inside ./dapp directorio
