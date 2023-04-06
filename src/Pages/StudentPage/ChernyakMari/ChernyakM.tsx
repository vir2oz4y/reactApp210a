import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import {Outlet} from "react-router-dom";

const ChernyakM = () => {
    return (
        <div>
            <Header studentFio={'Черняк Мария'}/>

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

export default ChernyakM;