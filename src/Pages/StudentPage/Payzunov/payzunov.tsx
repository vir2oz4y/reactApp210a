import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from "./AsideMenu/AsideMenu";
import {Outlet} from "react-router-dom";

const payzunov = () => {
    return (
        <div>
            <Header studentFio={'Пайзунов Никита'}/>

            <ContentBlock>
                <AsideMenu/>

                <Outlet/>
            </ContentBlock>
        </div>
    );
};

export default payzunov;