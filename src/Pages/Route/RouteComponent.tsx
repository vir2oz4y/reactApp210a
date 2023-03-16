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
import {default as TeacherTest1Page} from "../StudentPage/KryuchkovNick/Test1/Test1Page";
import {default as TeacherTest2Page} from "../StudentPage/KryuchkovNick/Test2/Test2Page";
import AleshinNickPage from "../StudentPage/student/AleshinNickPage";
import {default as AleshinTest1Page} from "../StudentPage/student/Test1/Test1Page";
import {default as AleshinTest2Page} from "../StudentPage/student/Test2/Test2Page";


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

                    <Route path={'aleshin'} element={<AleshinNickPage/>}>
                        <Route path={'Test1'} element={<AleshinTest1Page/>}/>
                        <Route path={'Test2'} element={<AleshinTest2Page/>}/>
                    </Route>


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