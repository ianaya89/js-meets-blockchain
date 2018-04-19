const HelloCoin = artifacts.require('./HelloCoin.sol')

contract('HelloCoin', function(accounts) {
  it('should put 1000 HelloCoin in the first account', function() {
    return HelloCoin.deployed().then(function(instance) {
      return instance.mint.call(accounts[0], 1000)
        .then(function (balance) {
          assert.equal(balance.toNumber(), '1000', '')
        })
    })
  })
})