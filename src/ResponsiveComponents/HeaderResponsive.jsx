import React from 'react'
import IconMenu from '@icons/icon_menu.svg'
import YardSale from '../../logos/logo_yard_sale.svg'
import { CategoriesBar } from '@components/CategoriesBar/CategoriesBar'
import {Header} from '@components/Header/Header'

const HeaderResponsive = ({isMobile,isDesktop}) => {
  return (
    <>
      {isMobile && (
        <Header>
          <img src={IconMenu} alt="logo" className="Menu" />
          <img src={YardSale} alt="logo" className="logo logo-header" />
        </Header>
      )}
      {isDesktop && (
        <Header>
          <img src={YardSale} alt="logo" className="logo logo-header" />
          <CategoriesBar isMobile={isMobile} />
        </Header>
      )}
    </>
  );
}

export {HeaderResponsive}