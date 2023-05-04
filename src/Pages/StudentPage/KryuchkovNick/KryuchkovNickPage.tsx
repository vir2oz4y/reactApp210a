import React, { useEffect } from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from "./AsideMenu/AsideMenu";
import {Outlet} from "react-router-dom";
import axios from 'axios';


export const kryuchkovAxios = axios.create();

const key = "d51fb1f3-4d2e-4c75-b409-5c6d29c1863a";

const KryuchkovNickPage = () => {

    useEffect(() => {
        kryuchkovAxios.post<{ authToken: string }>(
            'https://canstudy.ru/orderapi/user/login',
            {
                identifier: key
            }
        )
            .then((response) => {

                kryuchkovAxios
                    .defaults
                    .headers
                    .common['Authorization'] = 'Bearer ' + response.data.authToken
            });
    },[])

    return (
        <div>
            <Header studentFio={'Крючков Николай'}/>

            <ContentBlock>
                <div style={{display:'flex', gap:'1em'}}>
                    <div style={{width:'200px'}}>
                        <AsideMenu />
                    </div>

                    <div style={{padding:'1em', width:'100%'}}>
                        <Outlet />
                    </div>

                </div>
            </ContentBlock>
        </div>
    );
};

export default KryuchkovNickPage;