import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import { Outlet } from "react-router-dom";

const JabrovPage = () => {
    return (
        <div>
            <Header studentFio={'Жабров Никита'}/>

            <ContentBlock>
                <div style={{ display: 'flex', gap: '1em' }}>
                    <div style={{width: '200px'}}>
                        <SiteMenu />
                    </div>
                    <div style={{padding: '1em', width:'100%'}}>
                        <Outlet />
                    </div>

                </div>
                Gear secando
            </ContentBlock>
        </div>
    );
};

export default JabrovPage;