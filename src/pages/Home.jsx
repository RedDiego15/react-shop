import React from "react";
import {HeaderResponsive} from "@responsiveComponents/HeaderResponsive";
import {SearchResponsive} from "@responsiveComponents/SearchResponsive";

import {HeaderContainer} from "@containers/HeaderContainer"
import {Products} from '@components/Products/Products'

import { useResponsivePage } from '@hooks/useResponsivePage';
import {FaArrowLeft} from 'react-icons/fa'

import { CheckOut } from "@components/CheckOut/CheckOut";
import { HeaderMobile } from "../components/HeaderMobile/HeaderMobile";
import {AppContext} from '@context/AppContext';

const Home = () => {
  const {isMobile,isDesktop} = useResponsivePage()
  const {state:{toggleOrder}} = React.useContext(AppContext)
  
  return (
    <HeaderContainer>
      <HeaderResponsive isMobile={isMobile} isDesktop={isDesktop} />

      <SearchResponsive isMobile={isMobile} isDesktop={isDesktop} />
      <Products />
      
      {toggleOrder && (
        <>
          <CheckOut>
            <HeaderMobile selector="header-checkout">
              <FaArrowLeft />
              <p>ShoppingCart</p>
            </HeaderMobile>
          </CheckOut>
        </>
      )}
    </HeaderContainer>
  );
};

export {Home};
