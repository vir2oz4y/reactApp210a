import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";
import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
import TatarnikovEgorPage from "../StudentPage/TatarnikovEgor/TatarnikovEgorPage";
import {default as MemePage1} from "../StudentPage/TatarnikovEgor/test1/test1page";
import {default as MemePage2} from "../StudentPage/TatarnikovEgor/test2/test2page";

const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>} />

                    <Route path={'teacher'} element={<KryuchkovNickPage/>} />
                    <Route path={'blink'} element={<TatarnikovEgorPage/>}>
                        <Route path={'test1'} element={<MemePage1/>}/>
                        <Route path={'test2'} element={<MemePage2/>}/>
                  </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;