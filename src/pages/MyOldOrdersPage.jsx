import React from 'react'
import { ResponsivePage } from '@responsiveHook/ResponsivePage';
import { MyOldOrders } from '@components/MyOldOrders/MyOldOrders';
import { HeaderMobile } from '@components/HeaderMobile/HeaderMobile';
import IconMenu from '@icons/icon_menu.svg'
import ShoppingCart from '@icons/icon_shopping_cart.svg'
import {HeaderResponsive} from '@responsiveComponents/HeaderResponsive'
const MyOldOrdersPage = () => {
    const {isMobile, isDesktop} = ResponsivePage();

    return (
      <>
        {isMobile && (
          <>
            <HeaderMobile selector="mobile-check-out">
              <img src={IconMenu} alt="logo" className="Menu" />
              <p>My Orders</p>
              <img src={ShoppingCart} alt="logo" className="" />
            </HeaderMobile>
          </>
        )}
        {isDesktop && <HeaderResponsive isDesktop={isDesktop} />}
        <MyOldOrders isDesktop={isDesktop} />
      </>
    );
}

export {MyOldOrdersPage}