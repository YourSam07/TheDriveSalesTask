const mongoose = require('mongoose')

const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URL)
  .then((response) => {
    console.log(`Database connected (MongoDB): ${response.connection.host}`)
  })
  .catch(err => {
    console.log(err)
  })
}

module.exports = connectDB