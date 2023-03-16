import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import {Outlet} from "react-router-dom";

const AnikeevaVeraPage = () => {
    return (
        <div>
            <Header studentFio={'Аникеева Вера'}/>

            <ContentBlock>
                <SiteMenu/>
                <Outlet/>
            </ContentBlock>
        </div>
    );
};

export default AnikeevaVeraPage;