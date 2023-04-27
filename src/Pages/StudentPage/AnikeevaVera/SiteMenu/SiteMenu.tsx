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
                    <ListItemText primary="Производители" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('Order')}>
                    <ListItemText primary="Заказы" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('Product')}>
                    <ListItemText primary="Товары" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('Purchase')}>
                    <ListItemText primary="Корзина" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('User')}>
                    <ListItemText primary="Пользователь" />
                </ListItemButton>
            </ListItem>

        </List>

    );
};

export default SiteMenu;