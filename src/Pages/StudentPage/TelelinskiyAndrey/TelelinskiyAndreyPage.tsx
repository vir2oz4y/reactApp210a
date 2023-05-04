import React, {useEffect} from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import {Outlet} from "react-router-dom";
import axios from "axios";

export const TelelinskiyAxios = axios.create();

const key = "c0fccd07-58ad-434a-b594-2d8396c26c61";

const TelelinskiyAndreyPage = () => {

    useEffect(()=>{
        TelelinskiyAxios.post<{authToken: string}>(
            'https://canstudy.ru/orderapi/user/login',
            {
                    identifier: key
                 }
            )
                .then((response)=>{
                    TelelinskiyAxios
                        .defaults
                        .headers
                        .common['Authorization'] = 'Bearer ' + response.data.authToken
                });
    },[])
    return (
        <div>
            <Header studentFio={'Телелинский Андрей'}/>

            <ContentBlock>
                <div style={{display:'flex',gap:'lem'}}>
                    <div style={{width:'200px'}}>
                        <SiteMenu/>
                    </div>

                    <div style={{padding:'lem', width:'100%'}}>
                        <Outlet/>
                    </div>

                </div>
            </ContentBlock>
        </div>
    );
};

export default TelelinskiyAndreyPage;