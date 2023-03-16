import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";
import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
import TelelinskiyAndreyPage from "../StudentPage/TelelinskiyAndrey/TelelinskiyAndreyPage";
import {default as Telelinskiy1Page} from "../StudentPage/TelelinskiyAndrey/Test1/Test1Page";
import {default as Telelinskiy2Page} from "../StudentPage/TelelinskiyAndrey/Test2/Test2Page";

const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>} />

                    <Route path={'teacher'} element={<KryuchkovNickPage/>} />

                    <Route path={'Telelinskiy'} element={<TelelinskiyAndreyPage/>}>
                        <Route path={'Test1'} element={<Telelinskiy1Page/>} />
                        <Route path={'Test2'} element={<Telelinskiy2Page/>} />
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;