const iniciarSesion = async (req, res)=>{

    //simular bd de un usuario registrado
    const userBd = {"usuario": "Mariana", "clave": "123"}
    try{
        const {usuario, clave} = req.body
        //comparra con userBD
        if(userBd.usuario !== usuario || userBd.clave !== clave){
            res.json({mensaje: "Credenciales incorrectas"})
        }
        res.json({mansaje: "Usuario Bienvenido"})

    } catch (error) {
        res.json({error: error})
    }
}

const registrarse = async (req, res)=>{
    try{
        const datos = req.body
        res.json({datosRegistro: datos})
    }catch(error){
        res.json({error: error})
    }

}

module.exports = {iniciarSesion, registrarse}