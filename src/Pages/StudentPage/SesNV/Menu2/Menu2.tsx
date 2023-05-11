import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {useNavigate} from "react-router-dom";


const Menu2 = () => {
    const navigate = useNavigate();

    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={()=>navigate('category')}
                >
                    <ListItemText primary="Category "/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={()=>navigate('Test2')}
                >
                    <ListItemText primary="Client" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('Test2')}
                >
                    <ListItemText primary="Product" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('Test2')}
                >
                    <ListItemText primary="Order" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('Test2')}
                >
                    <ListItemText primary="Manufacture" />
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default Menu2;