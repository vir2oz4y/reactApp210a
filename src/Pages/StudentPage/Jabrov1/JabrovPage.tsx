import React, {useEffect} from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import { Outlet } from "react-router-dom";
import axios from 'axios';

export const JabrovAxios = axios.create();
const key = "4234154b-3a4a-40a1-829f-e6859614b248";

const JabrovPage = () => {

    useEffect(() => {
        JabrovAxios.post<{ authToken: string }>('https://canstudy.ru/orderapi/user/login',
            {
                identifier: key
            }
        )
            .then((response) => {
                JabrovAxios
                    .defaults
                    .headers
                    .common['Authorization'] = 'Bearer ' + response.data.authToken

                
            });
    }, [])

    return (
        <div>
            <Header studentFio={'Жабров Никита'}/>

            <ContentBlock>
                <div style={{ display: 'flex', gap: '1em' }}>
                    <div style={{width: '200px'}}>
                        <SiteMenu />
                    </div>
                    <div style={{padding: '1em', width:'100%'}}>
                        <Outlet />
                    </div>

                </div>
                Gear secando
            </ContentBlock>
        </div>
    );
};

export default JabrovPage;