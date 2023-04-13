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
                <div style={{display: 'flex', gap: '1em'}}>
                    <div style={{width:'200px'}}>
                        <AsideMenu/>
                    </div>

                    <div style={{padding:'1em', width: '100%'}}>
                        <Outlet/>
                    </div>

                </div>
            </ContentBlock>
        </div>
    );
};

export default payzunov;