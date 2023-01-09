const config = require("../config").config;

class UrlUtils {
  dataProvider = config.dataProviders[0];
  getQueryBasedAuthSearchUrl = (macaddress) => {
    const url = `${this.dataProvider.baseUrl}/${this.dataProvider.version}?apiKey=${this.dataProvider.params.apiKey}&output=${this.dataProvider.params.output}&search=${macaddress}`;

    if (this.isValidUrl(url)) return url;
    else throw new Error("Inavlid URL");
  };

  getSearchUrl = (macaddress) => {
    const url = `${this.dataProvider.baseUrl}/${this.dataProvider.version}?output=${this.dataProvider.params.output}&search=${macaddress}`;

    if (this.isValidUrl(url)) return url;
    else throw new Error("Inavlid URL");
  };

  isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };
}

module.exports = new UrlUtils();
