import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {useNavigate} from "react-router-dom";
const Menu = () => {

    const navigate = useNavigate();

    return (
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
                            onClick={()=>navigate('Test2')}
                        >
                            <ListItemText primary="ProductPage" />
                        </ListItemButton>
                    </ListItem>
                </List>
    );
};

export default Menu;