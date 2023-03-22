import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";

import GayvoronskikhAndrei from "../StudentPage/GayvoronskikhAndrei/GayvoronskikhAndrei";
import {default as GayvoronskikhTest1Page} from "../StudentPage/GayvoronskikhAndrei/Test1/Test1Page";
import  {default as GayvoronskikhTest2Page} from "../StudentPage/GayvoronskikhAndrei/Test2/Test2Page";

import BurlakAD from "../StudentPage/BurlakAD/BurlakAD";
import {default as Burlak1} from "../StudentPage/BurlakAD/Test1/test1page";
import {default as Burlak2} from "../StudentPage/BurlakAD/Test2/test2page";

import SesNV from "../StudentPage/SesNV/SesNV";
import {default as Ses1} from "../StudentPage/SesNV/Test1/test1page";
import {default as Ses2} from "../StudentPage/SesNV/Test2/test2page";

import BushmanovMakPage from "../StudentPage/BushmanovMak/BushmanovMakPage";
import {default as BushmanovTest1Page} from "../StudentPage/BushmanovMak/SiteMenu/Test1/Test1";
import {default as BushmanovTest2Page} from "../StudentPage/BushmanovMak/SiteMenu/Test2/Test2";

import AnikeevaVeraPage from "../StudentPage/AnikeevaVera/AnikeevaVeraPage";
import {default as AnikeevaTest1Page} from "../StudentPage/AnikeevaVera/Test1/Test1";
import {default as AnikeevaTest2Page} from "../StudentPage/AnikeevaVera/Test2/Test2";

import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
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

                    <Route index element={<StudentsPage/>} />

                    <Route path={'Gayvoronskikh'} element={<GayvoronskikhAndrei/>} >
                        <Route path={'test1'} element={<GayvoronskikhTest1Page/>} />
                        <Route path={'test2'} element={<GayvoronskikhTest2Page/>} />
                    </Route>

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

                    <Route path={'bushmanov'} element={<BushmanovMakPage/>} >
                        <Route path={'Test1'} element={<BushmanovTest1Page/>} />
                        <Route path={'Test2'} element={<BushmanovTest2Page/>} />
                    </Route>

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