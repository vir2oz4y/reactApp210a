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
                <Menu/>
                <Outlet/>
            </ContentBlock>
        </div>
    );
};

export default BurlakAD;