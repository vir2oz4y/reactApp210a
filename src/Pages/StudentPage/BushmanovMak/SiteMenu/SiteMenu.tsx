import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {useNavigate} from "react-router-dom";

const SiteMenu = () => {

    const navigate = useNavigate();

    return (
        <div>
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
                        <ListItemText primary="Manufacture" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('Order')}>
                        <ListItemText primary="Order" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('Product')}>
                        <ListItemText primary="Product" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('Purchase')}>
                        <ListItemText primary="Purchase" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('User')}>
                        <ListItemText primary="User" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );
};

export default SiteMenu;