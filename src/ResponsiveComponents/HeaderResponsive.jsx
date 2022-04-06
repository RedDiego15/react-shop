import React from 'react'

import YardSale from '../../logos/logo_yard_sale.svg'
import IconMenu from '@icons/icon_menu.svg'
import ShoppingCart from '@icons/icon_shopping_cart.svg'
import { CategoriesBar } from '@components/CategoriesBar/CategoriesBar'
import {Header} from '@components/Header/Header'
import { HeaderRigth } from '@components/Header_rigth/HeaderRigth'

const HeaderResponsive = ({isMobile,isDesktop}) => {
  return (
    <>
      {isMobile && (
        <Header>
          <img src={IconMenu} alt="logo" className="Menu" />
          <img src={YardSale} alt="logo" className="" />
          <img src={ShoppingCart} alt="logo" className="" />
        </Header>
      )}
      {isDesktop && (
        <Header>
          <img src={YardSale} alt="logo" className="logo" />
          <CategoriesBar isMobile={isMobile} />
          <HeaderRigth IconShoppingCart={ShoppingCart}/>
        </Header>
      )}
    </>
  );
}

export {HeaderResponsive}