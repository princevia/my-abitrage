const hre = require("hardhat");

async function main() {
  console.log("deploying...");
  const FlashLoanArbitrage929 = await hre.ethers.getContractFactory(
    "FlashLoanArbitrage929"
  );
  const flashLoanArbitrage = await FlashLoanArbitrage929.deploy(
    "0x5343b5bA672Ae99d627A1C87866b8E53F47Db2E6"
  );

  await flashLoanArbitrage.deployed();

  console.log("Flash loan contract deployed: ", flashLoanArbitrage.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
