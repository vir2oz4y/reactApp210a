import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import { Outlet } from "react-router-dom";

const AleshinPage = () => {
    return (
        <div>
            <Header studentFio={'Aleshin Grigory'} />

            <ContentBlock>

                <div style={{ display: 'flex', gap: 'elem' }}>
                    <div>
                        <SiteMenu />
                    </div>

                    <div style={{ padding: '1em', width: '100%' } }>
                        <Outlet />
                    </div>
                </div>

            </ContentBlock>
        </div>
    );
};

export default AleshinPage;