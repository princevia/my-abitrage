const hre = require("hardhat");

async function main() {
  console.log("deploying...");
  const HustleLoan = await hre.ethers.getContractFactory("HustleLoan");
  const hustleLoan = await HustleLoan.deploy(
    "0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D"
  );

  await hustleLoan.deployed();

  console.log(`hustleLoan contract deployed ${hustleLoan.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
