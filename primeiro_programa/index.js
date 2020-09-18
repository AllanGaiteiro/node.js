//console.log('ola mundo!');
console.log('Gerenciado Financeiro')
var cliente = 'Allan'

console.log(`Cliente: ${cliente}`)

var valProduct = 100
var valDiscount = 37


var discountFunc = require("./modules/calDiscount")

var finale = discountFunc(valProduct,valDiscount)

console.log(`valor final do produto ${finale}`)