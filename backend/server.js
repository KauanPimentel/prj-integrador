const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/hello", (req, res) => {
    res.json({ message: "API funcionando 🚀" })
})

app.listen(3000, () => {
    console.log("Backend rodando na porta 3000")
})