const MetaCoin = artifacts.require('./HelloCoin.sol');

module.exports = function(deployer) {
  deployer.deploy(MetaCoin);
};