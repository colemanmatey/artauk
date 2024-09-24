// import modules
const express = require("express");

// environment variables
require("dotenv").config()
const PORT = process.env.PORT
const HOST = process.env.HOST

// application
const app = express()

// route
app.get('/', (req, res) => {
    res.send("Artauk");
})

// listen to port
app.listen(PORT, () => {
    console.log(`Server running at ${HOST}:${PORT}`)
})
