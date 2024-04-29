const middlewareUno = (req, res, next) => {
    const { usuario } = req.params
    const usuarioEncontrado = usuarios.find(user => user.name === usuario)
    if (!usuarioEncontrado) {
        return res.status(404).json({ error: "usuario no encontrado" })
    }
    next();

}