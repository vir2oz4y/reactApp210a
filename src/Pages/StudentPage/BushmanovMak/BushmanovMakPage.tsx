import React, { useEffect } from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import {Outlet} from "react-router-dom";
import axios from 'axios';

export const bushmanovAxios = axios.create();

const key = "3c905955-3b5a-42b4-a2d1-1e20bfcb0dec";

const BushmanovMakPage = () => {

    useEffect(() => {
        bushmanovAxios.post<{ authToken: string }>('https://canstudy.ru/orderapi/user/login',
            {
                identifier: key
            }
        )
            .then((response) => {

                bushmanovAxios
                    .defaults
                    .headers
                    .common['Authorization'] = 'Bearer ' + response.data.authToken            
            });
    }, [])



        return (
            <div>
                <Header studentFio={'Бушманов Максим'} />

                <ContentBlock>
                    <div style={{ display: 'flex', gap: '1em' }}>
                        <div style={{ width: '200px' }}>
                            <SiteMenu />
                        </div>
                        <div style={{ padding: '1em', width: '100%' }}>
                            <Outlet />
                        </div>

                    </div>
                Gear secando
            </ContentBlock>
            </div>
        );
    
}
export default BushmanovMakPage;
