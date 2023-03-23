import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import Menu2 from "./Menu/Menu";
import { Outlet } from "react-router-dom";
import Menu from '../MalahovDmitriy/Menu/Menu';

const MalahovDmitriy = () => {
    return (
        <div>
            <Header studentFio={'Malahov Dmitriy'} />
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

export default MalahovDmitriy;