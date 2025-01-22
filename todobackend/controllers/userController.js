const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

//crear usuario
const registerUser = async (req, res) => {
    const {username, email, password} = req.body;

    //validar campos

    if (!username || !email || !password){
        return res.status(400).json({msg: "Por favor llene todos los campos, son obligatorios"});
    }
    try{
        //Encyptar contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        //crear usuario
        const newUser = await userModel.createUser({
            username, 
            email, 
            password: hashedPassword
        });
        res.status(201).json(newUser);
    }catch (error){
        console.log(error);
        if (error.code === "ER_DUP_ENTRY"){
            return res.status(400).json({msg: "El email o el usuario  ya existe"});
        }
        res.status(500).json({msg: "Error en el servidor, no se pudo registrar el usuario"});

        }
    };
    
module.exports = { registerUser };
