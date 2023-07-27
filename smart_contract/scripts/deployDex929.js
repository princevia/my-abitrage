const hre = require("hardhat");

async function main() {
  console.log("deploying...");
  const Dex929 = await hre.ethers.getContractFactory("Dex929");
  const dex929 = await Dex929.deploy();

  await dex929.deployed();

  console.log(`Dex929 contract deployed ${dex929.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
