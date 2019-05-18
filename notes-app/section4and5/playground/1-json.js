const fs = require('fs')
/* const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData)

fs.writeFileSync('1-json.json', bookJSON) */

// const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer.toString())

const data = fs.readFileSync('andrew-json.json').toString()
var ready = JSON.parse(data)
ready.name = 'Marciano'
ready.planet = 'Mars'
ready.age = 99

fs.writeFileSync('andrew-json.json', JSON.stringify(ready))
