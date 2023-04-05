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
                        <ListItemText primary="Test1"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => navigate('test2')}
                    >
                        <ListItemText primary="Test2"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );
};

export default SiteMenu;