const { version } = require("../../package.json");
require("dotenv").config();

module.exports = {
  token: process.env.TOKEN, // Your token here
  guildId: "", // Your guild id here
  clientId: "1015374716590096464", // Your client id here
  prefix: "!", // Your bot prefix here
  version, // Your bot version here
};
