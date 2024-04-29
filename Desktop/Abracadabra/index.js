import express from "express"
const app = express()

const __dirname = import.meta.dirname

app.use(express.static(__dirname + '/public'))

// archivo json: 
const usuarios = [
    { name: "Juan" },
    { name: "Jocelyn" },
    { name: "Astrid" },
    { name: "Maria" },
    { name: "Ignacia" },
    { name: "Javier" },
    { name: "Brian" }

]

// rutas: 

app.get("/abracadabra/usuarios", (req, res) => {

    res.json({
        usuarios: usuarios
    })
})

// middleware:

const middlewareUno = (req, res, next) => {
    const { usuario } = req.params
    const usuarioEncontrado = usuarios.find(user => user.name === usuario)
    if (!usuarioEncontrado) {
        return res.status(404).json({ error: "usuario no encontrado" })
    }
    next();

}

app.get("/abracadabra/juego/:usuario", middlewareUno, (req, res) => {
    res.send("El usuario existe")
})



app.get("/abracadabra/conejo/:n", (req, res) => {
    const n = Math.floor(Math.random() * 4 + 1).toString();
    if (n === req.params.n) {
        res.sendFile('voldemort.jpg', { root: './public/assets' });
    } else {
        res.sendFile('conejito.jpg', { root: './public/assets' });
    }
});



const PORT = process.env.PORT || 3000
app.listen(PORT, (req, res) => {
    console.log("servidor escuchando")
})
