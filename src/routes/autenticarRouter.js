const {Router} = require("express");

const enrutadorAuth = Router();
//importacion del controlador
const {iniciarSesion, registrarse} = require("../controllers/autenticarController")


//Ruta de registro en el sistema
enrutadorAuth.post("/registro", registrarse)

//ruta de inicio de sesion

enrutadorAuth.post("/login", iniciarSesion)

//se realiza todas las rutas, con (POST, GET, PUT, DELETE)
module.exports = enrutadorAuth;