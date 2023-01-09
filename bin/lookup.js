const urlUtils = require("../utils/url");

// Use In-built Fetch: requires node verion +18
const fetchAddressData = async (macaddress) => {
  const url = urlUtils.getSearchUrl(macaddress);
  try {
    const resp = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (resp.status == 200) {
      console.log(resp.data.vendorDetails.companyName);
    } else {
      throw new Error(`${resp.status} : ${resp.statusText}`);
    }
  } catch (e) {
    console.error(e);
  }
};

// Use http package. Works in all versions
const getAddressData = (macaddress) => {
  const https = require("https");
  const url = urlUtils.getQueryBasedAuthSearchUrl(macaddress);

  https
    .get(url, (resp) => {
      let data = "";

      // A chunk of data has been received.
      resp.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        if (resp.statusCode == 200) {
          console.log(
            `Provided mac address is associated with the company: ${data}`
          );
        } else {
          console.error(`${resp.statusCode} : ${resp.statusMessage}`);
        }
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
};

module.exports = { fetchAddressData, getAddressData };
