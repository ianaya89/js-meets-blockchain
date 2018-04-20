const HelloCoin = artifacts.require('./HelloCoin.sol')

contract('HelloCoin', function(accounts) {
  it('should put 1000 HelloCoin in the first account', () => {
    return HelloCoin.deployed()
      .then(instance => instance.mint.call(accounts[0], 1000))
      .then(balance => assert.equal(balance.toNumber(), '1000'))
  })
})