import React, { useEffect } from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import { Outlet } from "react-router-dom";
import axios from 'axios';

export const GayvoronskikhAxios = axios.create();
const key = "34fa7cdf-3cb0-4fec-a981-b1bfcd483d24";

const GayvoronskikhAndrei = () => {

    useEffect(() => {
        GayvoronskikhAxios.post < {authToken: string}
        >('https://canstudy.ru/orderapi/user/login', {
            identifier: key
        }).then((response) => {
            GayvoronskikhAxios
                .defaults
                .headers
            .common['Authorization']='Bearer '+response.data.authToken
            console.log(response.data.authToken)
        });
    },[])

    return (
        <div>
            <Header studentFio={'Гайворонских Андрей'}/>

            <ContentBlock>
                <div style={{ display: 'flex', gap: '1em' }}>

                    <div style={{width:'200px'}}>
                    <SiteMenu />
                    </div>

                
                    <div style={{padding:'1em', width:"100%"}}>
                    <Outlet />
                    </div>

                </div>
            </ContentBlock>
        </div>
    );
};

export default GayvoronskikhAndrei;