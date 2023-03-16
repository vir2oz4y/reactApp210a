import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {useNavigate} from "react-router-dom";

const AsideMenu = () => {

    const navigate = useNavigate();

    return (
        <nav aria-label="secondary mailbox folders">
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={()=>navigate('Test1')}
                    >
                        <ListItemText primary="Test1" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    onClick={()=>navigate('Test2')}>
                        <ListItemText primary="Text2" />
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    );
};

export default AsideMenu;