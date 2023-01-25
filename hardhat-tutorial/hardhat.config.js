require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_HTTP_URL = String(process.env.ALCHEMY_HTTP_URL);
const PRIVATE_KEY = String(process.env.PRIVATE_KEY);
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: ALCHEMY_HTTP_URL,
      accounts:[PRIVATE_KEY]
    },
  },
};
