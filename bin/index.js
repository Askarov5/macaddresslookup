#!/usr/bin/env node

const yargs = require("yargs");
const lookup = require("./lookup");

// Add command line parameter and make it required on initialization
const options = yargs
  .usage("Usage: -m <macaddress>")
  .option("m", {
    alias: "macaddress",
    describe: "Mac address to search",
    type: "string",
    demandOption: true,
  })
  .option("h").argv;

// Exit if address is invalid
if (
  !options.macaddress.match(/^(([A-Fa-f0-9]{2}[:]){5}[A-Fa-f0-9]{2}[,]?)+$/i)
) {
  console.error(`Invalid Mac Address: ${options.macaddress}`);
  process.exit(1); // Exit with error
}

// Additional information for user
console.log(`Searching for data associated with ${options.macaddress}`);

// Get address data
lookup.getAddressData(options.macaddress);
