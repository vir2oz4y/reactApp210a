import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";

const SiteMenu = () => {

    const navigate = useNavigate();

    return (
        <List>

            <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('Category')}>
                    <ListItemText primary="Category" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('Client')}>
                    <ListItemText primary="Client" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('Manufacture')}>
                    <ListItemText primary="Manufactures" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('Test2')}>
                    <ListItemText primary="Order" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('Product')}>
                    <ListItemText primary="Product" />
                </ListItemButton>
            </ListItem>

        </List>

    );
};

export default SiteMenu;