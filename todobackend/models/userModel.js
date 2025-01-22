const pool = require('../config/db');

//crear usuario
const createUser = async (user) => {
    try{
    const {username,email,password} = user;
    const [result] = await pool.query(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        [username,email,password]);

        return {id: result.insertId, username, email};
    } catch (error) {
        console.error("Error al crear usuario:", error);
        throw error;
    }
};


//obtener usuario por email
const getUserByEmail = async (email) => {
    try {
        const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
        return rows[0]; 
    } catch (error) {
        console.error("Error al obtener usuario por email:", error);
        throw error;
    }
};

module.exports = {createUser, getUserByEmail};
