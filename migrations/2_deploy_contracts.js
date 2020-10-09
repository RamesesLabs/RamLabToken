var RamLabToken = artifacts.require("./RamLabToken.sol");

module.exports = function(deployer) {
  deployer.deploy(RamLabToken);
};
