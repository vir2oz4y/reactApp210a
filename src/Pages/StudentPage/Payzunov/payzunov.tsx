import React, {useEffect} from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from "./AsideMenu/AsideMenu";
import {Outlet} from "react-router-dom";
import axios from "axios";

export const PayzunovAxios = axios.create();

const key = "91d4e167-7e0a-4fbc-9a72-c8de4435444b";
const payzunov = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        PayzunovAxios.post<{
            "authToken": string
        }>('https://canstudy.ru/orderapi/user/login',
            {
            identifier: key
        }
        )
            .then((response) => {

                PayzunovAxios
                    .defaults
                    .headers
                    .common['Authorization'] = 'Bearer ' + response.data.authToken
            });
    },[])
    return (
        <div>
            <Header studentFio={'Пайзунов Никита'}/>

            <ContentBlock>
                <div style={{display: 'flex', gap: '1em'}}>
                    <div style={{width:'200px'}}>
                        <AsideMenu/>
                    </div>

                    <div style={{padding:'1em', width: '100%'}}>
                        <Outlet/>
                    </div>

                </div>
            </ContentBlock>
        </div>
    );
};

export default payzunov;