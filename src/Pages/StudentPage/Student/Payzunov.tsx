import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import Menu from "../KryuchkovNick/Menu/Menu";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Outlet, useNavigate} from "react-router-dom";


const Payzunov = () => {



    return (
        <div>
            <Header studentFio={'Пайзунов Никита'}/>

            <ContentBlock>
                <Menu/>

                <Outlet/>
            </ContentBlock>


        </div>
    );
};

export default Payzunov;