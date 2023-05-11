import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";


const Menu2 = () => {
    const navigate = useNavigate();

    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('Kategorii')}
                >
                    <ListItemText primary="Kategori tovarov" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('Manufacture')}
                >
                    <ListItemText primary="Proizvoditeli" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('Client')}>
                    <ListItemText primary="Client" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('Product')}>
                    <ListItemText primary="Product" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('Zakaz')}
                >
                    <ListItemText primary="Zakaz" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('Tovar')}
                >
                    <ListItemText primary="Tovar" />
                </ListItemButton>
            </ListItem>

        </List>
    );
};

export default Menu2;