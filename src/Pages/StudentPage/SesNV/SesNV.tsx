import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import Menu2 from "./Menu2/Menu2";
import {Outlet} from "react-router-dom";


const SesNV = () => {
    return (
        <div>
            <Header studentFio={'Сесь Надежда'}/>

            <ContentBlock>
                <div style={{ display: 'flex', gap: '1em' }}>
                    <div style={{ width: '200px' }}>
                        <Menu2 />
                    </div>

                    <div style={{ padding:'1em' }}>
                        <Outlet />
                    </div>
                </div>
            </ContentBlock>
        </div>
    );
};

export default SesNV;