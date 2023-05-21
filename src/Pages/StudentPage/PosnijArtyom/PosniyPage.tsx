import React, { useEffect } from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import {Outlet} from "react-router-dom";
import axios from 'axios';

export const posnijAxios = axios.create();

const key = "8d591cd6-2d2f-4d28-b92a-0892feb4636d";

const PosnijPage = () => {

    useEffect(() => {
        posnijAxios.post<{ authToken: string }>('https://canstudy.ru/orderapi/user/login',
            {
                identifier: key
            }
        )
            .then((response) => {

                posnijAxios
                    .defaults
                    .headers
                    .common['Authorization'] = 'Bearer ' + response.data.authToken            
            });
    }, [])



        return (
            <div>
                <Header studentFio={'Посный Артём'} />

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
export default PosnijPage;
