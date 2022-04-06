import React from 'react'
import { ResponsivePage } from '@responsiveHook/ResponsivePage';
import { HeaderMobile } from '../components/HeaderMobile/HeaderMobile';
import { MyOrder } from '@components/MyOrder/MyOrder';
import { OldOrderItem } from '../components/OldOderItem/OldOrderItem';
import {HeaderResponsive} from '@responsiveComponents/HeaderResponsive';

import IconMenu from '@icons/icon_menu.svg'
import ShoppingCart from '@icons/icon_shopping_cart.svg'
const MyOrderPage = () => {
    const {isMobile,isDesktop} = ResponsivePage()
    return (
      <>
        {isMobile && (
          <>
            <HeaderMobile>
              <img src={IconMenu} alt="logo" className="Menu" />
              <p>My Order</p>
              <img src={ShoppingCart} alt="logo" className="" />
            </HeaderMobile>
          </>
        )}
        {isDesktop && <HeaderResponsive isDesktop={isDesktop} />}
        <MyOrder isDesktop={isDesktop} >
          <OldOrderItem/>
        </MyOrder>
      </>
    );
}

export {MyOrderPage}