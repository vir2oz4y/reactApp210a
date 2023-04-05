import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import {Outlet} from "react-router-dom";

const VishnyakAlekseiPage = () => {
    return (
        <div>

            <Header studentFio={'Вишняк Алексей'}/>

            <ContentBlock>
                <div style={{display: 'flex', gap:'1em'}}>
                    <div style={{width: '200px'}}>
                        <SiteMenu/>
                    </div>


                    <div style={{padding: '1em'}}>
                        <Outlet/>
                    </div>
                </div>
            </ContentBlock>
        </div>
    );
};

export default VishnyakAlekseiPage;