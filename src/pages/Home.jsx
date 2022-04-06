import React from "react";
import {HeaderResponsive} from "@responsiveComponents/HeaderResponsive";
import {SearchResponsive} from "@responsiveComponents/SearchResponsive";

import {HeaderContainer} from "@containers/HeaderContainer"
import {Products} from '@components/Products/Products'
import {FaArrowLeft} from 'react-icons/fa'

import { CheckOut } from "@components/CheckOut/CheckOut";
import { HeaderMobile } from "../components/HeaderMobile/HeaderMobile";
import { ResponsivePage } from '@responsiveHook/ResponsivePage';

const Home = () => {
  const {isMobile,isDesktop} = ResponsivePage()
  
  return (
    <HeaderContainer>
      <HeaderResponsive isMobile={isMobile} isDesktop={isDesktop} />

      <SearchResponsive isMobile={isMobile} isDesktop={isDesktop} />
      <Products />
      {isDesktop && (
        <CheckOut>
          <HeaderMobile selector="header-checkout">
            <FaArrowLeft/>
            <p>ShoppingCart</p>
          </HeaderMobile>
        </CheckOut>
      )}
    </HeaderContainer>
  );
};

export {Home};
