import React, { useEffect } from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import {Outlet} from "react-router-dom";
import axios from 'axios';

export const AnikeevaAxios = axios.create();

const key = "72e88faf-c8f4-4584-91e2-de87a113dcf5";

const AnikeevaVeraPage = () => {

    useEffect(() => {
        AnikeevaAxios.post<{ authToken: string }>('https://canstudy.ru/orderapi/user/login',
            {
                identifier: key
            }
        )
            .then((response) => {

                AnikeevaAxios
                    .defaults
                    .headers
                    .common['Authorization'] = 'Bearer ' + response.data.authToken
            });
    }, [])



    return (
        <div>
            <Header studentFio={'Аникеева Вера'} />

            <ContentBlock>
                <div style={{ display: 'flex', gap: '1em' }}>
                    <div style={{ width: '200px' }}>
                        <SiteMenu />
                    </div>
                    <div style={{ padding: '1em', width: '100%' }}>
                        <Outlet />
                    </div>

                </div>
            </ContentBlock>
        </div>
    );

}
export default AnikeevaVeraPage;

