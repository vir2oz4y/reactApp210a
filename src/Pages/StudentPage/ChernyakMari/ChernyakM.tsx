import React, {useEffect} from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import {Outlet} from "react-router-dom";
import axios from 'axios'

export const chernyakAxios = axios.create();
const key = "dd2954b5-9146-4dac-8fb6-744edc28d96b"
const ChernyakM = () => {
    useEffect(() => {
        chernyakAxios.post<{ authToken: string }>(
            'https://canstudy.ru/orderapi/user/login',
            {
                identifier: key
            }
        )
            .then((response) => {

                chernyakAxios
                    .defaults
                    .headers
                    .common['Authorization'] = 'Bearer ' + response.data.authToken
            });
    },[])
    return (
        <div>
            <Header studentFio={'Черняк Мария'}/>

            <ContentBlock>
                <div style = {{display: 'flex',gap: 'lem'}}>
                    <div style  = {{width: "200px"}}>
                        <SiteMenu />
                    </div>

                    <div style = {{padding: 'lem', width: '100%'}}>
                        <Outlet/>
                    </div>
                </div>



            </ContentBlock>
        </div>
    );
};

export default ChernyakM;