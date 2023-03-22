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
                <ListItemButton onClick={()=>navigate('Test1')}>
                    <ListItemText primary="Test1" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('Test2')}>
                    <ListItemText primary="Test2" />
                </ListItemButton>
            </ListItem>
        </List>

    );
};

export default SiteMenu;