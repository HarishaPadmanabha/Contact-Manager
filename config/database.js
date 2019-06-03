const mongoose = require('mongoose')
// console.log(process.env.MONGOLAB_URI)
const CONNECTION_URI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/contact-manager-jan'

// DB Confirguration 
mongoose.Promise = global.Promise
mongoose.connect(CONNECTION_URI, { useNewUrlParser: true })
    .then(function () {
        console.log('connected to db')
    })
    .catch(function () {
        console.log('OOPS!!! Something went wrong in DB Connection')
    })


module.exports = {
    mongoose
}