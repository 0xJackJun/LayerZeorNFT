let xlsx = require('xlsx');
let fs = require('fs');
const { type } = require('os');
let workbook = xlsx.readFile('RW_WL.xlsx');

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

let newEthAddressMap = new Map();
for (i = 0; i < ethAddress.length; i++) {
    if (!newEthAddressMap.has(ethAddress[i])) {
        newEthAddressMap.set(ethAddress[i], tokenId[i]);
        let id = [tokenId[i][0]];
        for (j = i + 1; j < ethAddress.length; j++) {
            if (ethAddress[i] == ethAddress[j]) {
                id.push(tokenId[j][0]);
                newEthAddressMap.set(ethAddress[i], id);
                // tokenId.splice(j, 1);
                // ethAddress.splice(j, 1);
            }
        }
    }
}
let newTokenId = [];
let newEthAddress = [];
newEthAddressMap.forEach(function (value, key) {
    newEthAddress.push(key);
    newTokenId.push(Array.from(value));
    console.log(value, key);
})
console.log(newTokenId)
address = JSON.stringify(newEthAddress)
id = JSON.stringify(newTokenId)
address = 'module.exports = ' + address;
id = 'module.exports = ' + id;

fs.writeFile("./address.js", address, () => { });
fs.writeFile("./id.js", id, () => { });
