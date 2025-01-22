import React from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Aquí iría la lógica para registrar al usuario.
        console.log("Registro exitoso");
        navigate("/dashboard"); // Redirige al dashboard después de registrarse
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Registro
                </Typography>
                <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Nombre"
                        margin="normal"
                        type="text"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Correo Electrónico"
                        margin="normal"
                        type="email"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Contraseña"
                        margin="normal"
                        type="password"
                        required
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3 }}
                        type="submit"
                    >
                        Registrarse
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;  
