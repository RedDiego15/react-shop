import React from 'react'
import IconShoppingCart from '../../../icons/icon_shopping_cart.svg';
import { HeaderRigth } from '../Header_rigth/HeaderRigth';

function Header({children}) {
  return (
    <header>
      <nav>
        <div className="navbar-left">{children}</div>
      </nav>
    </header>
  );
}

export  {Header}