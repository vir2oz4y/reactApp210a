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
                <AsideMenu/>
                <Outlet/>
            </ContentBlock>
        </div>
    );
};

export default SviridenkoDimPage;