const express = require('express')
const cors = require("cors")
const connection = require('./Config/db')
const productRoute = require('./Router/product.routes')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/product", productRoute)

app.listen(process.env.port, async () => {
  try {
    await connection
    console.log("Connected to DB!!")
    console.log(`Server is running at ${process.env.port} `)
  } catch (error) {
    console.log("Please check your connection!!")
  }
})