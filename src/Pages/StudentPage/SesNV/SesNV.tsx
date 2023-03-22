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
                <Menu2/>
                <Outlet/>
            </ContentBlock>
        </div>
    );
};

export default SesNV;