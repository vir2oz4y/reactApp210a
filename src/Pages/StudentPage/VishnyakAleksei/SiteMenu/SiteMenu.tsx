import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {dividerClasses} from "@mui/material";
import {useNavigate} from "react-router-dom";

const SiteMenu = () => {
    const navnavigate = useNavigate();
    return (
        <div>
            {/*<div className={'text'}>
                <TextField id="standard-basic" label="hi" variant="standard" />
            </div>
            <div className={'but'}>
                <Button variant="contained">Я кнопка</Button>
            </div>*/}
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick = {()=>navnavigate('Category')}
                        >
                            <ListItemText primary="Category" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick = {()=>navnavigate('Client')}
                        >
                            <ListItemText primary="Client" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick = {()=>navnavigate('Manufacturer')}
                        >
                            <ListItemText primary="Manufacturer" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick = {()=>navnavigate('Order')}
                        >
                            <ListItemText primary="Order" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick = {()=>navnavigate('Product')}
                        >
                            <ListItemText primary="Product" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick = {()=>navnavigate('Purcase')}
                        >
                            <ListItemText primary="Purcase" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick = {()=>navnavigate('User')}
                        >
                            <ListItemText primary="User" />
                        </ListItemButton>
                    </ListItem>
                </List>
        </div>
    );
};

export default SiteMenu;