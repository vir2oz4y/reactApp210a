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
                <div style = {{display: 'flex',gap: 'lem'}}>
                    <div style  = {{width: "200px"}}>
                        <SiteMenu />
                    </div>

                    <div style = {{padding: 'lem'}}>
                        <Outlet/>
                    </div>
                </div>



            </ContentBlock>
        </div>
    );
};

export default AnikeevaVeraPage;