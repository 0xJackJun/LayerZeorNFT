let xlsx = require('xlsx');
let fs = require('fs');
const { type } = require('os');
let workbook = xlsx.readFile('RW_WL_database.xlsx');

let sheetNames = workbook.SheetNames;

let sheet = workbook.Sheets[sheetNames[0]];

var data = xlsx.utils.sheet_to_json(sheet);
let tokenId = [];
let ethAddress = [];

for (i = 0; i < data.length; i++) {
    let temp = [];
    temp[0] = data[i].TOKEN_ID;
    tokenId.push(temp);
    ethAddress.push(data[i].ETH_ADDRESS);
}
for (i = 0; i < ethAddress.length; i++) {
    for (j = i + 1; j < ethAddress.length; j++) {
        if (ethAddress[i] == ethAddress[j]) {
            tokenId[i].push(tokenId[j][0]);
            tokenId.splice(j, 1);
            ethAddress.splice(j, 1);
        }
    }
}
address = JSON.stringify(ethAddress)
id = JSON.stringify(tokenId)
address = 'module.exports = ' + address;
id = 'module.exports = ' + id;

fs.writeFile("./address.js", address, () => { });
fs.writeFile("./id.js", id, () => { });
