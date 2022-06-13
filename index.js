const fs = require('fs')
const concat = require('./app/concate')
const sum = require('./app/sum')

const data = JSON.parse(fs.readFileSync('array.json', 'utf8')).array;

const con = concat.arraystogether(data);
const sumTotale = sum.sum(con);


console.log(data);
console.log(con);
console.log("Total sum is:" + sumTotale);