import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";
import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
import {default as TeacherTest1Page} from "../StudentPage/KryuchkovNick/Test1/Test1Page";
import {default as TeacherTest2Page} from "../StudentPage/KryuchkovNick/Test2/Test2Page";

const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>}/>

                    <Route path={'teacher'} element={<KryuchkovNickPage/>}>
                        <Route path={'test1'} element={<TeacherTest1Page/>}/>
                        <Route path={'test2'} element={<TeacherTest2Page/>}/>
                    </Route>


                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;