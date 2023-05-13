import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";

import StudentsPage from "../StudentsPage"

import SviridenkoDimPage from "../StudentPage/SviridenkoDim/SviridenkoDimPage";
//import {default as  SDBTest1Page} from "../StudentPage/SviridenkoDim/Test1/Test1Page";
//import {default as  SDBTest2Page} from "../StudentPage/SviridenkoDim/ProductPage/Test2Page";

import GayvoronskikhAndrei from "../StudentPage/GayvoronskikhAndrei/GayvoronskikhAndrei";
import {default as GayvoronskikhTest1Page} from "../StudentPage/GayvoronskikhAndrei/Test1/Test1Page";
import  {default as GayvoronskikhTest2Page} from "../StudentPage/GayvoronskikhAndrei/Test2/Test2Page";

import BurlakAD from "../StudentPage/BurlakAD/BurlakAD";
import {default as Burlak1} from "../StudentPage/BurlakAD/Test1/test1page";
import {default as Burlak2} from "../StudentPage/BurlakAD/Test2/test2page";

import SesNV from "../StudentPage/SesNV/SesNV";
import {default as Ses1} from "../StudentPage/SesNV/Test1/test1page";
import { default as Ses2 } from "../StudentPage/SesNV/Test2/test2page";

import MalahovDmitriy from "../StudentPage/MalahovDmitriy/MalahovDmitriy";
import { default as Mal1 } from "../StudentPage/MalahovDmitriy/Test1/test1page";
import { default as Mal2 } from "../StudentPage/MalahovDmitriy/Test2/test2page";


import JabrovPage1 from "../StudentPage/Jabrov1/JabrovPage";
import { default as JabrovPageTest1 } from "../StudentPage/Jabrov1/test1/Test1";
import { default as JabrovPageProduct } from "../StudentPage/Jabrov1/Product/ProductPage";
import { default as JabrovCategory } from "../StudentPage/Jabrov1/Category/CategoryPage";
import { default as JabrovTovar } from "../StudentPage/Jabrov1/Tovar/tovar";
import { default as JabrovZakaz } from "../StudentPage/Jabrov1/Zakaz/zakaz";
import { default as JabrovClient } from "../StudentPage/Jabrov1/Clients/ClientPage";
import { default as JabrovManufacturer } from "../StudentPage/Jabrov1/Manufacturer/ManufacturerPage";

import BushmanovMakPage from "../StudentPage/BushmanovMak/BushmanovMakPage";
import { default as BushmanovManufacturePage } from "../StudentPage/BushmanovMak/Manufacture/Manufacture";
import { default as BushmanovOrderPage } from "../StudentPage/BushmanovMak/Order/Order";
import { default as BushmanovProductPage } from "../StudentPage/BushmanovMak/Product/Product";
import { default as BushmanovPurchasePage } from "../StudentPage/BushmanovMak/Purchase/Purchase";
import { default as BushmanovUserPage } from "../StudentPage/BushmanovMak/User/User";


import AnikeevaVeraPage from "../StudentPage/AnikeevaVera/AnikeevaVeraPage";
import {default as AnikeevaCategory} from "../StudentPage/AnikeevaVera/Category/Category";
import {default as AnikeevaClient} from "../StudentPage/AnikeevaVera/Client/Client";
import {default as AnikeevaManufacturer} from "../StudentPage/AnikeevaVera/Manufacturer/Manufacturer";
import {default as AnikeevaOrder} from "../StudentPage/AnikeevaVera/Order/Order";
import {default as AnikeevaProduct} from "../StudentPage/AnikeevaVera/Product/Product";
import {default as AnikeevaPurchase} from "../StudentPage/AnikeevaVera/Purchase/Purchase";
import {default as AnikeevaUser} from "../StudentPage/AnikeevaVera/User/User";

import Payzunov from "../StudentPage/Payzunov/payzunov";
import {default as PayzunovTest1Page} from "../StudentPage/Payzunov/Test1/Test1Page";
import {default as PayzunovTest2Page} from "../StudentPage/Payzunov/Test2/Test2Page";

import TatarnikovEgorPage from "../StudentPage/TatarnikovEgor/TatarnikovEgorPage";
import {default as MemePage1} from "../StudentPage/TatarnikovEgor/test1/test1page";
import {default as MemePage2} from "../StudentPage/TatarnikovEgor/test2/test2page";

import TelelinskiyAndreyPage from "../StudentPage/TelelinskiyAndrey/TelelinskiyAndreyPage";
import {default as TelelinskiyCategory} from "../StudentPage/TelelinskiyAndrey/Category/Category";
import {default as TelelinskiyClient} from "../StudentPage/TelelinskiyAndrey/Client/Client";
import {default as TelelinskiyManufacturer} from "../StudentPage/TelelinskiyAndrey/Manufacturer/Manufacturer";
import {default as TelelinskiyOrder} from "../StudentPage/TelelinskiyAndrey/Order/Order";
import {default as TelelinskiyProduct} from "../StudentPage/TelelinskiyAndrey/Product/Product";


import VishnyakAlekseiPage from "../StudentPage/VishnyakAleksei/VishnyakAlekseiPage";
import {default as VishnyakTest1Page} from "../StudentPage/VishnyakAleksei/SiteMenu/Category/Category";
import {default as VishnyakTest2Page} from "../StudentPage/VishnyakAleksei/SiteMenu/Client/Client";
import {default as VishnyakManufacturer} from "../StudentPage/VishnyakAleksei/SiteMenu/Manufacturer/Manufacturer";
import {default as VishnyakOrder} from "../StudentPage/VishnyakAleksei/SiteMenu/Order/Order";
import {default as VishnyakProduct} from "../StudentPage/VishnyakAleksei/SiteMenu/Product/Product";
import {default as VishnyakPurchase} from "../StudentPage/VishnyakAleksei/SiteMenu/Purchase/Purcase";
import {default as VishnyakUser} from "../StudentPage/VishnyakAleksei/SiteMenu/User/User";

import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
import {default as TeacherTest1Page} from "../StudentPage/KryuchkovNick/Test1/Test1Page";
import {default as TeacherTest2Page} from "../StudentPage/KryuchkovNick/Test2/Test2Page";
import {default as TeacherCategoryPage} from "../StudentPage/KryuchkovNick/Category/CategoryPage";
import {default as TeacherClientPage} from "../StudentPage/KryuchkovNick/Client/ClientPage";
import {default as TeacherManufacturePage} from "../StudentPage/KryuchkovNick/Manufacture/ManufacturePage";
import {default as TeacherOrderPage} from "../StudentPage/KryuchkovNick/Order/OrderPage";
import {default as TeacherProductPage} from "../StudentPage/KryuchkovNick/Product/ProductPage";


import PosniyPage from '../StudentPage/PosnijArtyom/PosniyPage';

import AleshinNickPage from "../StudentPage/Aleshin/Aleshin";
import { default as AleshinTest1Page } from "../StudentPage/Aleshin/Test1/Test1";
import { default as AleshinTest2Page } from "../StudentPage/Aleshin/Test2/Test2";



const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>

                    <Route index element={<StudentsPage/>} />
                    
                    <Route path={'vishnyak'} element={<VishnyakAlekseiPage/>}>
                        <Route path={'Category'} element={<VishnyakTest1Page/>}/>
                        <Route path={'Client'} element={<VishnyakTest2Page/>}/>
                        <Route path={'Manufacturer'} element={<VishnyakManufacturer/>}/>
                        <Route path={'Order'} element={<VishnyakOrder/>}/>
                        <Route path={'Product'} element={<VishnyakProduct/>}/>
                        <Route path={'Purchase'} element={<VishnyakPurchase/>}/>
                        <Route path={'User'} element={<VishnyakUser/>}/>
                    </Route>

                    <Route path={'teacher'} element={<KryuchkovNickPage/>}>
                        <Route path={'test1'} element={<TeacherTest1Page/>}/>
                        <Route path={'Product'} element={<TeacherTest2Page/>}/>
                        <Route path={'category'} element={<TeacherCategoryPage/>}/>
                        <Route path={'manufacturer'} element={<TeacherManufacturePage/>}/>
                        <Route path={'client'} element={<TeacherClientPage/>}/>
                        <Route path={'order'} element={<TeacherOrderPage/>}/>
                        <Route path={'product'} element={<TeacherProductPage/>}/>
                    </Route>

                    <Route path={'Telelinskiy'} element={<TelelinskiyAndreyPage/>}>
                        <Route path={'Category'} element={<TelelinskiyCategory/>} />
                        <Route path={'Client'} element={<TelelinskiyClient/>} />
                        <Route path={'Manufacturer'} element={<TelelinskiyManufacturer/>} />
                        <Route path={'Order'} element={<TelelinskiyOrder/>} />
                        <Route path={'Product'} element={<TelelinskiyProduct/>} />
                    </Route>

                    <Route path={'Posniy'} element={<PosniyPage />}>
                        <Route path={'Test1'} element={<PosniyPage />} />
                        <Route path={'Test2'} element={<PosniyPage />} />
                    </Route>

                    <Route path={'student'} element={<SviridenkoDimPage/>}>
                        {/*<Route path={'test1'} element={<SDBTest1Page/>}/>
                        <Route path={'Product'} element={<SDBTest2Page/>}/>*/}
                    </Route>                 
                    
                    {<Route path={'payzunov'} element={<Payzunov/>}>
                        <Route path={'Test1'} element={<PayzunovTest1Page/>}/>
                        <Route path={'Test2'} element={<PayzunovTest2Page/>}/>
                    </Route>}

                    <Route path={'Gayvoronskikh'} element={<GayvoronskikhAndrei/>} >
                        <Route path={'test1'} element={<GayvoronskikhTest1Page/>} />
                        <Route path={'Product'} element={<GayvoronskikhTest2Page/>} />
                    </Route>

                    <Route path={'aleshin'} element={<AleshinNickPage/>}>
                        <Route path={'Test1'} element={<AleshinTest1Page/>}/>
                        <Route path={'Test2'} element={<AleshinTest2Page/>}/>
                    </Route>

                    <Route path={'anikeeva'} element={<AnikeevaVeraPage/>} >
                        <Route path={'Category'} element={<AnikeevaCategory/>} />
                        <Route path={'Client'} element={<AnikeevaClient/>} />
                        <Route path={'Manufacturer'} element={<AnikeevaManufacturer/>} />
                        <Route path={'Order'} element={<AnikeevaOrder/>} />
                        <Route path={'Product'} element={<AnikeevaProduct/>} />
                        <Route path={'Purchase'} element={<AnikeevaPurchase/>} />
                        <Route path={'User'} element={<AnikeevaUser/>} />

                    </Route>

                    <Route path={'bushmanov'} element={<BushmanovMakPage/>} >
                        <Route path={'Manufacture'} element={<BushmanovManufacturePage />} />
                        <Route path={'Order'} element={<BushmanovOrderPage />} />
                        <Route path={'Product'} element={<BushmanovProductPage />} />
                        <Route path={'Purchase'} element={<BushmanovPurchasePage />} />
                        <Route path={'User'} element={<BushmanovUserPage />} />
                    </Route>

                    <Route path={'jabrov'} element={<JabrovPage1 />} >
                        <Route path={'Test1'} element={<JabrovPageTest1 />} />
                        <Route path={'Product'} element={<JabrovPageProduct />} />
                        <Route path={'Category'} element={<JabrovCategory />} />
                        <Route path={'tovar'} element={<JabrovTovar />} />
                        <Route path={'zakaz'} element={<JabrovZakaz />} />
                        <Route path={'Client'} element={<JabrovClient />} />
                        <Route path={'Manufacturer'} element={<JabrovManufacturer />} />
                    </Route>

                    <Route path={'BurlakAD'} element={<BurlakAD/>}>
                        <Route path={'test1'} element={<Burlak1/>} />
                        <Route path={'Product'} element={<Burlak2/>} />
                    </Route>
                    
                    <Route path={'SesNV'} element={<SesNV/>} >
                        <Route path={'test1'} element={<Ses1/>} />
                        <Route path={'Product'} element={<Ses2/>} />
                    </Route>
                    <Route path={'MalahovDmitriy'} element={<MalahovDmitriy />} >
                        <Route path={'test1'} element={<Mal1 />} />
                        <Route path={'Product'} element={<Mal2 />} />
                    </Route>

                    <Route path={'blink'} element={<TatarnikovEgorPage/>}>
                        <Route path={'test1'} element={<MemePage1/>}/>
                        <Route path={'Product'} element={<MemePage2/>}/>
                    </Route>


                </Route>
            </Routes>
        </HashRouter>
    );
};


export default RouteComponent;

