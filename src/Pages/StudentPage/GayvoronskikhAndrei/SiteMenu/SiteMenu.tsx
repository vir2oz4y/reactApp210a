import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {ListItemButton} from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import {useNavigate} from "react-router-dom";

const SiteMenu = () => {

    const navigate = useNavigate();

    return (
        <div>
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => navigate('category')}
                    >
                        <ListItemText primary="Category"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => navigate('client')}
                    >
                        <ListItemText primary="Client"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => navigate('manufacturer')}
                    >
                        <ListItemText primary="Manufacturer" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => navigate('order')}
                    >
                        <ListItemText primary="Order" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => navigate('product')}
                    >
                        <ListItemText primary="Product" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => navigate('purhause')}
                    >
                        <ListItemText primary="Purchase" />
                    </ListItemButton>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => navigate('user')}
                        >
                            <ListItemText primary="User" />
                        </ListItemButton>
                    </ListItem>
                </ListItem>
            </List>
        </div>
    );
};

export default SiteMenu;