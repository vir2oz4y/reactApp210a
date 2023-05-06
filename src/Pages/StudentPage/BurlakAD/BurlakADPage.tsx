import React, { useEffect } from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from './AsideMenu/AsideMenu';
import {Outlet} from "react-router-dom";
import axios from 'axios';


export const BurlakAxios = axios.create();

const key = "70e20133-53e4-4e32-9876-3c67282c037d";

const BurlakAdPage = () => {

    useEffect(() => {
        BurlakAxios.post<{ authToken: string }>(
            'https://canstudy.ru/orderapi/user/login',
            {
                identifier: key
            }
        )
            .then((response) => {

                BurlakAxios
                    .defaults
                    .headers
                    .common['Authorization'] = 'Bearer ' + response.data.authToken
            });
    },[])

    return (
        <div>
            <Header studentFio={'Бурлак Александр'}/>

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

export default BurlakAdPage;