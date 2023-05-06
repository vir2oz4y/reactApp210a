import React, { useEffect } from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import axios from "axios"
import Menu2 from "./Menu/Menu";
import { Outlet } from "react-router-dom";
import Menu from '../MalahovDmitriy/Menu/Menu';

export const MalahovAxios = axios.create();
const key = "19436010-da02-4b6a-be9d-5febaa38468b";

const KryuchkovNickPage = () => {

    useEffect(() => {
        MalahovAxios.post<{ authToken: string }>(
            'https://canstudy.ru/orderapi/user/login',
            {
                identifier: key
            }
        )
            .then((response) => {

                MalahovAxios
                    .defaults
                    .headers
                    .common['Authorization'] = 'Bearer ' + response.data.authToken
            });
    }, [])
}


const MalahovDmitriy = () => {
    return (
        <div>
            <Header studentFio={'Malahov Dmitriy'} />
            <ContentBlock>
                <div style={{display:'flex',gap:'1em'}}>
                    <div style={{width:'200px'}}>
                        <Menu />
                    </div>

                    <div style={{ padding: '1em', width: '100%'}}>
                        <Outlet />
                    </div>
                </div>
            </ContentBlock>
        </div>
    );
};

export default MalahovDmitriy;