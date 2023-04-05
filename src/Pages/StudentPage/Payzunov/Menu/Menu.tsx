import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {useNavigate} from "react-router-dom";

const Menu = () => {

    const navigate = useNavigate();


    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={()=>navigate('Test 1')}>
                    <ListItemText primary="Test 1" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('Test 2')}>
                    <ListItemText primary="Test 2" />
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default Menu;