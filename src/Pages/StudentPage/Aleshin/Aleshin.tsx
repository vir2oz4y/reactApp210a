import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import SiteMenu from "./SiteMenu/SiteMenu";
import { Outlet } from "react-router-dom";

const AleshinPage = () => {
    return (
        <div>
            <Header studentFio={'Алешин Григорий'} />

            <ContentBlock>

                <div style={{ display: 'flex', gap: 'elem' }}>
                    <div>
                        <SiteMenu />
                    </div>


                    <div>
                        <Outlet />
                    </div>
                </div>

            </ContentBlock>
        </div>
    );
};

export default AleshinPage;