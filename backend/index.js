const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./MidlleWare/errorHandler')
const connectDB = require('./config/db')
const port = process.env.PORT || 8007
const cors = require('cors')
const path = require("path");

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/tasks', require("./Router/router"))

app.use(errorHandler)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("frontend", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})
