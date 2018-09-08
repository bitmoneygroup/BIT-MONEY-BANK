var BitMoneyBank = artifacts.require("./BitMoneyBank.sol");
var Mortgage = artifacts.require("./Mortgage.sol");
module.exports = function(deployer) {
  deployer.deploy(BitMoneyBank);
  deployer.deploy(Mortgage);
};
