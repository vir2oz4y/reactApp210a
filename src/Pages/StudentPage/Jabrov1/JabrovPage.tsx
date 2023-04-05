import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import { Outlet } from "react-router-dom";

const JabrovPage = () => {
    return (
        <div>
            <Header studentFio={'Zhabrov Nikita'} />

            <ContentBlock>
                <SiteMenu />
                <Outlet />
                
            </ContentBlock>
        </div>
    );
};

export default JabrovPage;