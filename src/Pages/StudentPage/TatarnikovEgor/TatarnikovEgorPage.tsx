import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import Menu from "./Menu/Menu";
import {Outlet} from "react-router-dom";

const TatarnikovEgorPage = () => {
    return (
        <div>
            <Header studentFio={'Татарников Егор'}/>

            <ContentBlock>
                <Menu/>
                <Outlet/>
            </ContentBlock>
        </div>
    );
};

export default TatarnikovEgorPage;