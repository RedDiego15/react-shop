import React from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Home} from "../pages/Home";
import {NotFound} from "../pages/NotFound";
import {ItemDetailMobile} from '@pages/ItemDetailMobile'
import { MobileCategoriesPage } from "@pages/MobileCategoriesPage";
import { LoginPage } from "@pages/LoginPage";
import { PasswordRecoveryPage } from "@pages/PasswordRecoveryPage";
import { MailSentPage } from "@pages/MailSentPage";
import {CreatePasswordPage} from "@pages/CreatePasswordPage";
import { CreateAccountPage } from "@pages/CreateAccountPage";
import {EditAccountPage} from "@pages/EditAccountPage";
import {MobileCheckOutPage} from "@pages/MobileCheckOutPage";
import { MyOldOrdersPage } from "@pages/MyOldOrdersPage";
import { MyOrderPage } from "@pages/MyOrderPage";
import {AppContext} from '@context/AppContext';
import {useInitialState} from '@hooks/useInitialState';

function App() {
  const initialState =useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/sent-email" element={<MailSentPage />} />
          <Route
            exact
            path="/create-password"
            element={<CreatePasswordPage />}
          />
          <Route
            exact
            path="/mobile-product-detail"
            element={<ItemDetailMobile />}
          />
          <Route
            exact
            path="/mobile-categories"
            element={<MobileCategoriesPage />}
          />
          <Route
            exact
            path="/mobile-check-out"
            element={<MobileCheckOutPage />}
          />
          <Route exact path="/edit-my-account" element={<EditAccountPage />} />
          <Route
            exact
            path="/create-my-account"
            element={<CreateAccountPage />}
          />
          <Route
            exact
            path="/recovery-password"
            element={<PasswordRecoveryPage />}
          />
          <Route exact path="/my-orders" element={<MyOldOrdersPage />} />
          <Route exact path="/my-order" element={<MyOrderPage />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
