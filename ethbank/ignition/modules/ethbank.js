const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("DeployEthBank", (m) => {
  const ethbank = m.contract("EthBank", []);
  return { ethbank };
});