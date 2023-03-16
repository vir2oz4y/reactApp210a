import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";
import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
import Payzunov from "../StudentPage/Student/Payzunov";
import {default as PayzunovTest1Page} from "../StudentPage/Student/Test 1/Test1Page";
import {default as PayzunovTest2Page} from "../StudentPage/Student/Test 1/Test1Page";

const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>}/>

                    <Route path={'teacher'} element={<KryuchkovNickPage/>}/>

                    <Route path={'payzunov'} element={<Payzunov/>}>
                        <Route path={'Test 1'} element={<PayzunovTest1Page/>}/>
                        <Route path={'Test 2'} element={<PayzunovTest2Page/>}/>
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
};

    export default RouteComponent;