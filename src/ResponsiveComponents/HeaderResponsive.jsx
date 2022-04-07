import React from 'react'

import YardSale from '@logos/logo_yard_sale.svg'
import IconMenu from '@icons/icon_menu.svg'
import ShoppingCart from '@icons/icon_shopping_cart.svg'
import { CategoriesBar } from '@components/CategoriesBar/CategoriesBar'
import {Header} from '@components/Header/Header'
import { HeaderRigth } from '@components/Header_rigth/HeaderRigth'
import CartNotificacionIcon from '@icons/icon_shopping_cart_notification.svg';
import {AppContext} from '@context/AppContext';


const HeaderResponsive = ({isMobile, isDesktop}) => {
  const {
    state: {cart},
  } = React.useContext(AppContext);

  const dinamicCart = () => {
    return (
      <>
        {cart.length == 0 && (
          <>
            <img src={ShoppingCart} alt="shopping cart" />
          </>
        )}
        {cart.length > 0 && (
          <>
            <img src={CartNotificacionIcon} alt="shopping cart" />
            {isDesktop && (
              <p className="header-rigth__product-to-buy">{cart.length}</p>
            )}
          </>
        )}
      </>
    );
  };

  return (
    <>
      {isMobile && (
        <Header>
          <img src={IconMenu} alt="logo" className="Menu" />
          <img src={YardSale} alt="logo" className="" />
          {dinamicCart()}
        </Header>
      )}
      {isDesktop && (
        <Header>
          <img src={YardSale} alt="logo" className="logo" />
          <CategoriesBar isMobile={isMobile} />
          <HeaderRigth>{dinamicCart()}</HeaderRigth>
        </Header>
      )}
    </>
  );
};

export {HeaderResponsive}