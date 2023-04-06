import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from "./CiteMenu/CiteMenu";
import {Outlet} from "react-router-dom";

const SviridenkoDimPage = () => {
    return (
        <div>
            <Header studentFio={'Свириденко Дмитрий'}/>

            <ContentBlock>
                <div style={{ display: 'flex', gap: 'lem' }}>
                    <div style={{ width: '200px' }}>
                        <AsideMenu />
                    </div>

                    <div style={{ padding: 'lem' }}>
                        <Outlet />
                    </div>
                </div >

            </ContentBlock>
        </div>
    );
};

export default SviridenkoDimPage;