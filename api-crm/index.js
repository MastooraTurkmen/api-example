require('dotenv').config()
const express = require("express")
const routes = require("./src/routes/crmRoute.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

const app = express()
const PORT = 5000;

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
})

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app);

app.get("/", (req, res) => {
    res.send(`Node and express server is running on port ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);

})