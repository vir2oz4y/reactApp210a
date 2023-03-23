import React from 'react';
import TextField from '@mui/material/TextField';

import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";

import {useNavigate} from "react-router-dom";

const AsideMenu = () => {

    const navigate = useNavigate();

    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={()=>navigate('test1')}
                >
                    <ListItemText primary="Category" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton
                    onClick={()=>navigate('test2')}
                >
                    <ListItemText primary="Client" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('test2')}
                >
                    <ListItemText primary="Manufacturer" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('test2')}
                >
                    <ListItemText primary="Order" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('test2')}
                >
                    <ListItemText primary="Product" />
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default AsideMenu;