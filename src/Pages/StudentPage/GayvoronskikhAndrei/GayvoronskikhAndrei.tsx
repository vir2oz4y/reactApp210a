import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import {Outlet} from "react-router-dom";

const GayvoronskikhAndrei = () => {
    return (
        <div>
            <Header studentFio={'Гайворонских Андрей'}/>

            <ContentBlock>
                <SiteMenu/>
                <Outlet/>
            </ContentBlock>
        </div>
    );
};

export default GayvoronskikhAndrei;