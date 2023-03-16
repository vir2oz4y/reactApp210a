import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from "../KryuchkovNick/AsideMenu/AsideMenu";
import {Outlet} from "react-router-dom";

const AleshinNickPage = () => {
    return (
        <div>
            <Header studentFio={'Алешин Григорий'}/>

            <ContentBlock>
                <AsideMenu/>

                <Outlet/>
            </ContentBlock>
        </div>
    );
};

export default AleshinNickPage;