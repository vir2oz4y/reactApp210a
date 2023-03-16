import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from "./AsideMenu/AsideMenu";
import {Outlet} from "react-router-dom";

const KryuchkovNickPage = () => {
    return (
        <div>
            <Header studentFio={'Крючков Николай'}/>

            <ContentBlock>
                <AsideMenu/>

                <Outlet/>
            </ContentBlock>
        </div>
    );
};

export default KryuchkovNickPage;