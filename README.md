# macaddresslookup

lookup-cli is a command script to lookup any mac address info by using macaddress.io api

# Pre-requisites

1. node js

# Installation and Running

Run following commands:

1. git clone url - clone the repo
2. npm i - to install the packages
3. Create a .env file in the root folder which contains API_KEY from macaddress.io
4. node . -m macAddress - to get data related to mac address

### Extra:

5. npm i -g . or sudo npm i -g . - to install this script "globally". Any commands listed in the bin section of the package.json file will be made available as command line applications.
6. getMacAddressData -m macAddress - to get data related to mac address from anywhere

# Documentation

This application extends the current cmd commands with getMacAddressData. It can be installed globally and reached from anywhere in your terminal.

File structure:  
bin - main source folder.
--index.js - contains initialization codes.
--lookup.js - contains http requests.
utils - contains utility functions.
--urlUtils.js - contains utility functions.
.env - contains environment variables and secrets.
config.js - configurations file.

There're 3 files you may need to update.

1. .env - contains API_KEY required for request data from macaddress.io
2. config file - to change data provider
3. urlUtils - to change url depending on data provider requirements
