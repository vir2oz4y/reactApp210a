import React from 'react';
import TextField from '@mui/material/TextField';
import {dividerClasses, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

const SiteMenu = () => {

    const navigate = useNavigate();

    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('Test1')}>
                    <ListItemText primary="Monkey" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('Test2')}>
                    <ListItemText primary="NoMonkey" />
                </ListItemButton>
            </ListItem>
        </List>



    );
};

export default SiteMenu;