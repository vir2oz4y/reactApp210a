import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";
import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
import BushmanovMakPage from "../StudentPage/BushmanovMak/BushmanovMakPage";
import {default as BushmanovTest1Page} from "../StudentPage/BushmanovMak/SiteMenu/Test1/Test1";
import {default as BushmanovTest2Page} from "../StudentPage/BushmanovMak/SiteMenu/Test2/Test2";

const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>} />

                    <Route path={'teacher'} element={<KryuchkovNickPage/>} />
                    <Route path={'bushmanov'} element={<BushmanovMakPage/>} >
                        <Route path={'Test1'} element={<BushmanovTest1Page/>} />
                        <Route path={'Test2'} element={<BushmanovTest2Page/>} />
                    </Route>

                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;