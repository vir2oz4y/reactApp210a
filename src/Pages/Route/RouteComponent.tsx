import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";
import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
import BurlakAD from "../StudentPage/BurlakAD/BurlakAD";
import SesNV from "../StudentPage/SesNV/SesNV";
import {default as Burlak1} from "../StudentPage/BurlakAD/Test1/test1page";
import {default as Burlak2} from "../StudentPage/BurlakAD/Test2/test2page";
import {default as Ses1} from "../StudentPage/SesNV/Test1/test1page";
import {default as Ses2} from "../StudentPage/SesNV/Test2/test2page";

const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>} />

                    <Route path={'BurlakAD'} element={<BurlakAD/>}>
                        <Route path={'test1'} element={<Burlak1/>} />
                        <Route path={'test2'} element={<Burlak2/>} />
                    </Route>
                    <Route path={'SesNV'} element={<SesNV/>} >
                        <Route path={'test1'} element={<Ses1/>} />
                        <Route path={'test2'} element={<Ses2/>} />
                    </Route>

                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;