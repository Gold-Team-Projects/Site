const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/index.html")
})

app.use(express.static("src"))

try { app.listen(80, () => console.log("Running...")) }
catch (err) { app.listen(8080, () => console.log("Running...")) }