import express from "express";
import 'dotenv/config'
import cors from 'cors'


const app = express()
const __dirname = import.meta.dirname

app.use(cors())
app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.json({ ok: true })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`servidor escuchando...`)
})