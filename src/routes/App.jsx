import React from "react";
//import global from '../styles/global'
import {LoginContainer} from "../Containers/LoginContainer";
import {DesktopContainer} from "../Containers/DesktopContainer";
import {MobileContainer} from "../Containers/MobileContainer";
import {OrderContainer} from "../Containers/OrderContainer";
import {HeaderContainer} from "../Containers/HeaderContainer";
import {ProductsContainer} from "../Containers/ProductsContainer";
import {SearchContainer} from "../Containers/SearchContainer";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Login} from "../components/Login/Login";
import {RecoverPass} from "../components/RecoverPass/RecoverPass";
import {CreatePass} from "../components/CreatePass/CreatePass";
import {SentMail} from "../components/SentMail/SentMail";
import {CreateAccount} from "../components/MyAccount/CreateAccount";
import {EditAccount} from "../components/MyAccount/EditAccount";
import {MobileCategories} from "../components/MobileCategories/MobileCategories";
import {MyOrder} from "../components/MyOrder/MyOrder";
import {MyOldOrders} from "../components/MyOldOrders/MyOldOrders";
import {Header} from "../components/Header/Header";
import {ItemDetail} from "../components/ItemDetail/ItemDetail";
import {CheckOut} from "../components/CheckOut/CheckOut";
import {SearchItem} from "../components/SearchItem/SearchItem";
import {Home} from "../pages/Home";
import {NotFound} from "../pages/NotFound";
import { CategoriesBar } from '@components/CategoriesBar/CategoriesBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/sent-email" element={<SentMail />} />
        <Route exact path="/create-password" element={<CreatePass />} />
        <Route exact path="/product-detail" element={<ItemDetail />} />
        <Route exact path="/categories" element={<CategoriesBar />} />
        <Route exact path="/check-out" element={<CheckOut />} />
        <Route exact path="/edit-my-account" element={<EditAccount />} />
        <Route exact path="/create-my-account" element={<CreateAccount />} />
        <Route exact path="/save-changes-my-account" element={<EditAccount />} />
        <Route exact path="/recovery-password" element={<RecoverPass />} />
        <Route exact path="/my-orders" element={<MyOldOrders />} />
        <Route exact path="/my-order" element={<MyOrder />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
