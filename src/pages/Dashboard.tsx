import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    const tasks = [
        { id: 1, title: 'Comprar leche', status: 'Pendiente' },
        { id: 2, title: 'Hacer ejercicio', status: 'Completado' },
    ];

    const handleEdit = (task: { id: number; title: string; status: string }) => {
        navigate('/edit-task', { state: { task } });
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                Mis Tareas
            </Typography>
            <List>
                {tasks.map((task) => (
                    <ListItem key={task.id} divider>
                        <ListItemText
                            primary={task.title}
                            secondary={task.status}
                        />
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => handleEdit(task)}
                        >
                            Editar
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Dashboard;