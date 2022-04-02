require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
   
    rinkeby: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      // url: "https://rpc-mumbai.matic.today",
      // accounts: [process.env.privateKey]
      url: "https://rinkeby.infura.io/v3/0cd531e08635430d805a79f589b47bae",
      accounts: ["03ad2ebf146d16b644f9df29df13d3707cc95c57add39a456bec290877753f43"]
    },
     /*
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [process.env.privateKey]
    }
    */
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

