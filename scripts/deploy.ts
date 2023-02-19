import { ethers } from "hardhat";

async function main() {
  const [owner,acct1,acct2,acct3]= await ethers.getSigners();
  const decodeart = await ethers.getContractFactory("DecodeArt");
  const deploydecodeart = await decodeart.deploy("DecodeArt", "DA");
  await deploydecodeart.deployed();
  console.log(deploydecodeart.address);

  const cid = "QmQEV4UtS56P8CN4s4dS7jyG1r6NuvCGfjyZx77mW14h2y";
    let uri = "ipfs://" + cid;

  console.log(await deploydecodeart.safeMint(uri))

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

