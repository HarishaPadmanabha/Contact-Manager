const express = require('express')
const app = express() 

// routing only 
const router = express.Router() 

console.log(Object.keys(app).length)
console.log(Object.keys(router).length)