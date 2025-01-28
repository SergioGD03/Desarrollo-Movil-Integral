import React, { useState } from "react";
import { TextField, Button, Container, Box, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';
import axios from "axios";

const Login: React.FC = () => {
    const navigate = useNavigate();

    /*const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Ingresando...');
        navigate('/dashboard');
    };*/

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try{
            const response = await axios.post('', {
                email,
                password
            });  
              console.log('Token recibido', response.data.token); //verificar que se recibe el token
              localStorage.setItem('Token', `Bearer ${response.data.token}`);
              setErrorMessage('');
              navigate('/dashboard');
    }catch(error: any){
        console.error('Error al iniciar sesion', error);
        setErrorMessage(
            error.response?.data?.message || `Error al inciar sesion, verifique sus credenciales`
        );
    }
};
    
    return (
        <div className="ring">
            <i style={{ '--clr': '#00ff0a' } as React.CSSProperties}></i>
            <i style={{ '--clr': '#ff0057' } as React.CSSProperties}></i>
            <i style={{ '--clr': '#fffd44' } as React.CSSProperties}></i>
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputBx">
                        <input type="email" placeholder="Correo Electrónico" required />
                    </div>
                    <div className="inputBx">
                        <input type="password" placeholder="Contraseña" required />
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Ingresar" />
                    </div>
                </form>
                <div className="links">
                    <a href="#" onClick={() => navigate('/forgot-password')}>¿Olvidaste tu contraseña?</a>
                    <a href="#" onClick={() => navigate('/register')}>Regístrate aquí</a>
                </div>
            </div>
        </div>
    );
};
export default Login;
