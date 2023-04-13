import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import Menu from "./Menu/Menu";
import {Outlet} from "react-router-dom";

const BurlakAD = () => {
    return (
        <div>
            <Header studentFio={'Бурлак Александр'}/>

            <ContentBlock>
                <div style={{display:'flex',gap:'1em'}}>
                    <div style={{width:'200px'}}>
                        <Menu />
                    </div>

                    <div style={{padding:'1em'}}>
                        <Outlet />
                    </div>
                </div>
            </ContentBlock>
        </div>
    );
};

export default BurlakAD;