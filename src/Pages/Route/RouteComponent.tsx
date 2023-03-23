import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";
import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
import VishnyakAlekseiPage from "../StudentPage/VishnyakAleksei/VishnyakAlekseiPage";
import {default as VishnyakTest1Page} from "../StudentPage/VishnyakAleksei/SiteMenu/Category/Category";
import {default as VishnyakTest2Page} from "../StudentPage/VishnyakAleksei/SiteMenu/Client/Client";
import {default as VishnyakManufacturer} from "../StudentPage/VishnyakAleksei/SiteMenu/Manufacturer/Manufacturer";
import {default as VishnyakOrder} from "../StudentPage/VishnyakAleksei/SiteMenu/Order/Order";
import {default as VishnyakProduct} from "../StudentPage/VishnyakAleksei/SiteMenu/Product/Product";
import {default as VishnyakPurchase} from "../StudentPage/VishnyakAleksei/SiteMenu/Purchase/Purcase";
import {default as VishnyakUser} from "../StudentPage/VishnyakAleksei/SiteMenu/User/User";

const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>} />

                    <Route path={'teacher'} element={<KryuchkovNickPage/>} />
                    <Route path={'vishnyak'} element={<VishnyakAlekseiPage/>}>
                        <Route path={'Category'} element={<VishnyakTest1Page/>}/>
                        <Route path={'Client'} element={<VishnyakTest2Page/>}/>
                        <Route path={'Manufacturer'} element={<VishnyakManufacturer/>}/>
                        <Route path={'Order'} element={<VishnyakOrder/>}/>
                        <Route path={'Product'} element={<VishnyakProduct/>}/>
                        <Route path={'Purchase'} element={<VishnyakPurchase/>}/>
                        <Route path={'User'} element={<VishnyakUser/>}/>
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;