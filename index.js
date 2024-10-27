const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.sendFile("src/index.html")
})

app.use(express.static("src"))

app.listen(80, () => console.log("Running..."))