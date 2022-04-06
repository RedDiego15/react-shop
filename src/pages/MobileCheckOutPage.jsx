import React from 'react'
import { CheckOut } from '../components/CheckOut/CheckOut';

import IconMenu from '@icons/icon_menu.svg'
import { HeaderMobile } from '../components/HeaderMobile/HeaderMobile';

const MobileCheckOutPage = () => {

    return (
      <>
        <HeaderMobile selector="mobile-check-out">
        <img src={IconMenu} alt="logo" className="Menu" />
        <p>ShoppingCart</p>
        </HeaderMobile>

        <CheckOut />
      </>
    );
}

export {MobileCheckOutPage}