import React, {useEffect} from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import { Outlet } from "react-router-dom";
import axios from 'axios';

export const DogonashevAxios = axios.create();
const key = "4234154b-3a4a-40a1-829f-e6859614b248";

const DogonashevPage = () => {

    useEffect(() => {
        DogonashevAxios.post<{ authToken: string }>('https://canstudy.ru/orderapi/user/login',
            {
                identifier: key
            }
        )
            .then((response) => {
                DogonashevAxios
                    .defaults
                    .headers
                    .common['Authorization'] = 'Bearer ' + response.data.authToken


            });
    }, [])

    return (
        <div>
            <Header studentFio={'Догонашев Матвей'}/>

            <ContentBlock>
                <div style={{ display: 'flex', gap: '1em' }}>
                    <div style={{width: '200px'}}>
                        <SiteMenu />
                    </div>
                    <div style={{padding: '1em', width:'100%'}}>
                        <Outlet />
                    </div>

                </div>
                Oladushek
            </ContentBlock>
        </div>
    );
};

export default DogonashevPage;