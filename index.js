const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/index.html")
})

app.use(express.static("src"))

app.listen(process.env.PORT | 8080, () => console.log(`Running on port ${process.env.PORT | 8080}`))
