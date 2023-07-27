require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
   networks: {
     localganache: {
       url: process.env.LOCAL_GANACHE_ENDPOINT,
       accounts: [`0x${process.env.LOCAL_GANACHE_PRIVATE_KEY}`]
       // network_id: "5777" // Match any network id
       },
     },
    networks: {
      goerli: {
        url: process.env.ALCHEMY_ENDPOINT,
        accounts: [process.env.ALCHEMY_PRIVATE_KEY]
      
       },
    },
    // networks: {
    //   mumbai: {
    //     url:process.env.MUMBAI_ENDPOINT,
    //     accounts: [process.env.MUMBAI_PRIVATE_KEY],
          
    //   },
    // },
};
