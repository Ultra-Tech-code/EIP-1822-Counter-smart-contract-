import { ethers } from "hardhat";

async function main() {

  const proxy = await ethers.getContractFactory("Proxy");
  const Proxy = await proxy.deploy();

  await Proxy.deployed();

  console.log(`Proxy deployed to ${Proxy.address}`);
}

// Proxyaddress = 0x2144683943E349562830B5bB2D559650B46F1f11
//Implemntation address = 0x509cbba6a74c168465db9b7bd2053b0bce00a58e
//ImplemetationUpgrade.sol Address = 0x5dd8d36da5cc6b12d1bfcd7d13ffc1e116d5f1b7

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
