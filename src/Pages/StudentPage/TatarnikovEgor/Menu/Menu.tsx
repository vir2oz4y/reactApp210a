import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {useNavigate} from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate()

    return (
        <div>
            <List>
                <ListItem disablePadding>
                    <ListItemButton  onClick={()=>navigate('test1')}>
                        <ListItemText primary="Test_1" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('test2')}>
                        <ListItemText primary="Test_2" />
                    </ListItemButton>
                </ListItem>
            </List>

            <div>
                <TextField id="standard-basic" label="Отдай сало" variant="standard" />
            </div>


        </div>
    );
};

export default Menu;