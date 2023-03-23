import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";
import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
import VishnyakAlekseiPage from "../StudentPage/VishnyakAleksei/VishnyakAlekseiPage";
import {default as VishnyakTest1Page} from "../StudentPage/VishnyakAleksei/SiteMenu/Test1/Category";
import {default as VishnyakTest2Page} from "../StudentPage/VishnyakAleksei/SiteMenu/Client/Client";

const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>} />

                    <Route path={'teacher'} element={<KryuchkovNickPage/>} />
                    <Route path={'vishnyak'} element={<VishnyakAlekseiPage/>}>
                        <Route path={'Test1'} element={<VishnyakTest1Page/>}/>
                        <Route path={'Test1'} element={<VishnyakTest2Page/>}/>
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;