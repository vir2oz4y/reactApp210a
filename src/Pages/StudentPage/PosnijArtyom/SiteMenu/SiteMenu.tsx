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
                    <ListItemButton onClick={() => navigate('Test1')}>
                        <ListItemText primary="Category" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('Test2')}>
                        <ListItemText primary="Client" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('Test1')}>
                        <ListItemText primary="Manufacturer" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('Test1')}>
                        <ListItemText primary="Order" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('Test1')}>
                        <ListItemText primary="Product" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );
};

export default SiteMenu;