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
                <ListItemButton onClick={()=>navigate('Category')}>
                    <ListItemText primary="Категории товаров" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('Client')}>
                    <ListItemText primary="Клиенты" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('Manufacturer')}>
                    <ListItemText primary="Производитель" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('Product')}>
                    <ListItemText primary="Товар" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('Order')}>
                    <ListItemText primary="Заказ" />
                </ListItemButton>
            </ListItem>

        </List>



    );
};

export default SiteMenu;