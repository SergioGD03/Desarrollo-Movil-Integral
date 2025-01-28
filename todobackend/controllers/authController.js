const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const login = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await userModel.getUserByEmail(email);

        if(!user){
            return res.status(400).json({msg: "Crendenciales incorrectas"});
        }

        const ispPasswordValid = await bcrypt.compare(password, user.password);

        if(!ispPasswordValid){
            return res.status(400).json({msg: "Credenciales incorrectas"});
        }
        const token = jwt.sign({id: user.id, email: user.email}, process.env.SECRET, {expiresIn: '1h'});
        res.json({token});
    }catch (error){
        console.log('Error en el login:', error);
        res.status(500).json({message:'Error en el servidor'});
    }
};

module.exports = {login};