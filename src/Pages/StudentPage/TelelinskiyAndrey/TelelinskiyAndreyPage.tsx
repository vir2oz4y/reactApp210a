import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import {Outlet} from "react-router-dom";

const TelelinskiyAndreyPage = () => {
    return (
        <div>
            <Header studentFio={'Телелинский Андрей'}/>

            <ContentBlock>
                <SiteMenu/>
                <Outlet/>
            </ContentBlock>
        </div>
    );
};

export default TelelinskiyAndreyPage;