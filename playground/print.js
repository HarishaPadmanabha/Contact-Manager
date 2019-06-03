// const city = require('./values').city 
const { city, player, add } = require('./values')

const ipAddress = require('./ip-config')

console.log('city', city)
console.log('player', player)
console.log('ip', ipAddress)

console.log(add(10,20))
