const express = require("express")
const bodyParser = require("body-parser")

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world")
})


const PORT = 5000;

app.use(bodyParser.json())
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});