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
    if (typeof (data[i].TOKEN_ID) === 'string') {
        temp = data[i].TOKEN_ID.split(',');
        var res = temp.map(function (item) { return parseInt(item, 10); });
        tokenId.push(res);
    } else {
        temp[0] = data[i].TOKEN_ID;
        tokenId.push(temp);
    }
    ethAddress.push(data[i].ETH_ADDRESS);
}

address = JSON.stringify(ethAddress)
id = JSON.stringify(tokenId)
address = 'module.exports = ' + address;
id = 'module.exports = ' + id;

fs.writeFile("./address.js", address, () => { });
fs.writeFile("./id.js", id, () => { });
