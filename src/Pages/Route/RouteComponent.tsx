import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";
import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
import AnikeevaVeraPage from "../StudentPage/AnikeevaVera/AnikeevaVeraPage";
import {default as AnikeevaTest1Page} from "../StudentPage/AnikeevaVera/Test1/Test1";
import {default as AnikeevaTest2Page} from "../StudentPage/AnikeevaVera/Test2/Test2";

const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>} />

                    <Route path={'teacher'} element={<KryuchkovNickPage/>} />
                    <Route path={'anikeeva'} element={<AnikeevaVeraPage/>} >
                        <Route path={'Test1'} element={<AnikeevaTest1Page/>} />
                        <Route path={'Test2'} element={<AnikeevaTest2Page/>} />
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;