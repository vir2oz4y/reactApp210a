import React, { useEffect } from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import Menu2 from "./Menu2/Menu2";
import {Outlet} from "react-router-dom";
import axios from 'axios';


export const sesAxios = axios.create();
const key = "1c1971a1-9411-4e79-ac6d-8a7ac5fe32c6";
const SesNV = () => {
    useEffect(() => {
        sesAxios.post<{ authToken: string }>(
            'https://canstudy.ru/orderapi/user/login',
            {
                identifier: key
            }
        )
            .then((response) => {

                sesAxios
                    .defaults
                    .headers
                    .common['Authorization'] = 'Bearer ' + response.data.authToken
            });
    },[])
    return (
        <div>
            <Header studentFio={'Сесь Надежда'}/>

            <ContentBlock>
                <div style={{ display: 'flex', gap: '1em' }}>
                    <div style={{ width: '200px' }}>
                        <Menu2/>
                    </div>

                    <div style={{ padding:'1em', width:'100%'}}>
                        <Outlet />
                    </div>
                </div>
            </ContentBlock>
        </div>
    );
};

export default SesNV;