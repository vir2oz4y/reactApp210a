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
                    <ListItemText primary="Test 1" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton
                    onClick={()=>navigate('test2')}
                >
                    <ListItemText primary="Test 2" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton
                    onClick={()=>navigate('test1')}
                >
                    <ListItemText primary="Test 1" />
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default AsideMenu;