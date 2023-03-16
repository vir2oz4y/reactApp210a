import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage"
import SviridenkoDimPage from "../StudentPage/SviridenkoDim/SviridenkoDimPage";
import {default as  SDBTest1Page} from "../StudentPage/SviridenkoDim/Test1/Test1Page";
import {default as  SDBTest2Page} from "../StudentPage/SviridenkoDim/Test2/Test2Page";

const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>

                    <Route index element={<StudentsPage/>}/>


                    <Route path={'student'} element={<SviridenkoDimPage/>}>
                        <Route path={'test1'} element={< SDBTest1Page/>}/>
                        <Route path={'test2'} element={< SDBTest2Page/>}/>
                    </Route>




                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;

