const fs = require('fs')
const concat = require('./app/concate')
const sum = require('./app/sum')

const data = JSON.parse(fs.readFileSync('array.json', 'utf8')).array;

const con = concat.arraystogether(data);
const sumTotale = sum.sum(con);


console.log(data);
console.log(con);
console.log("Total sum is:" + sumTotale);

function resolveAfter2Seconds() {
    return new Promise(arraystogether => {
        setTimeout(() => {
            arraystogether(con);
        }, 2000);
    });
}

async function asyncCall() {
    console.log(data);
    const result = await resolveAfter2Seconds();
    console.log(result);

}

asyncCall();