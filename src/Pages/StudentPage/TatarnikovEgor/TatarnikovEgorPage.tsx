import React, {useEffect} from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import Menu from "./Menu/Menu";
import {Outlet} from "react-router-dom";
import axios from "axios";

export const TatarnikovAxios = axios.create();

const key = "9e584549-212b-444f-bb17-2ea665a6b0b6";

const TatarnikovEgorPage = () => {

    useEffect(()=>{
        TatarnikovAxios.post<{authToken: string}>(
            'https://canstudy.ru/orderapi/user/login',
            {
                identifier: key
            }
        )
            .then((response)=>{
                TatarnikovAxios
                    .defaults
                    .headers
                    .common['Authorization'] = 'Bearer ' + response.data.authToken
            });
    },[])
    return (
        <div>
            <Header studentFio={'Татарников Егор'}/>

            <ContentBlock>
                <div style={{display:'flex',gap:'lem'}}>
                    <div style={{width:'200px'}}>
                        <Menu/>
                    </div>

                    <div style={{padding:'lem', width:'100%'}}>
                        <Outlet/>
                    </div>

                </div>
            </ContentBlock>
        </div>
    );
};


export default TatarnikovEgorPage;