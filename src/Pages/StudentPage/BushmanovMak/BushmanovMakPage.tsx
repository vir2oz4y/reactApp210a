import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import {Outlet} from "react-router-dom";

const BushmanovMakPage = () => {
    return (
        <div>
            <Header studentFio={'Бушманов Максим'}/>

            <ContentBlock>
                <SiteMenu/>
                <Outlet/>
                Gear secando
            </ContentBlock>
        </div>
    );
};

export default BushmanovMakPage;