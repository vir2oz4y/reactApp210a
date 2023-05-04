import React, {useEffect} from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import { Outlet } from "react-router-dom";
import axios from "axios";


export const aleshinAxios = axios.create();

const key = "b5855904-78c6-4fbf-9afb-535c61724ba5";
const AleshinPage = () => {

    useEffect(() => {
        aleshinAxios.post<{authToken: string}>(
            'https://canstudy.ru/orderapi/user/login',
            {
                identifier: key
            }
        )
            .then((response) => {

                aleshinAxios
                    .defaults
                    .headers
                    .common['Authorization'] = 'Bearer ' + response.data.authToken
            });
    }, [])

    return (
        <div>
            <Header studentFio={'Алешин Григорий'} />

            <ContentBlock>

                <div style={{ display: 'flex', gap: 'elem' }}>
                    <div>
                        <SiteMenu />
                    </div>

                    <div style={{ padding: '1em', width: '100%' } }>
                        <Outlet />
                    </div>
                </div>

            </ContentBlock>
        </div>
    );
};

export default AleshinPage;