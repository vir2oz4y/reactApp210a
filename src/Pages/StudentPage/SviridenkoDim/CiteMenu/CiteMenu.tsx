import React from 'react';
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";

const AsideMenu = () => {

    const navigate = useNavigate();

    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('test1')}
                >
                    <ListItemText primary=" Kategory product "/>
                </ListItemButton>
            </ListItem>


            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('test2')}
                    >
                    <ListItemText primary="Klient "/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('test2')}
                >
                    <ListItemText primary="Postavshiki " />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('test2')}
                >
                    <ListItemText primary="Tovary " />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('test2')}
                >
                    <ListItemText primary="Manufacture " />
                </ListItemButton>
            </ListItem>







































        </List>

    );
};

export default AsideMenu;



