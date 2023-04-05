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
                        onClick={() => navigate('test1')}
                    >
                        <ListItemText primary="Category"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => navigate('test2')}
                    >
                        <ListItemText primary="Client"/>
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
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => navigate('test2')}
                    >
                        <ListItemText primary="Purchase" />
                    </ListItemButton>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => navigate('test2')}
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