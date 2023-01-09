// load all env variables
require("dotenv").config();

const config = {
  dataProviders: [
    {
      baseUrl: "https://api.macaddress.io",
      version: "v1",
      params: {
        apiKey: process.env.API_KEY,
        output: "json",
        search: "",
      },
    },
  ],
};

module.exports = { config };
