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
                <div style={{display:'flex', gap:'1em'}}>
                    <div style={{width:'200px'}}>
                        <AsideMenu />
                    </div>

                    <div style={{padding:'1em'}}>
                        <Outlet />
                    </div>

                </div>
            </ContentBlock>
        </div>
    );
};

export default KryuchkovNickPage;