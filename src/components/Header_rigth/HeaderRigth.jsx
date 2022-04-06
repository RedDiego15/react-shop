import React from 'react'
import {DesktopMenu} from '@components/DesktopMenu/DesktopMenu'
import {IoIosArrowDown} from "react-icons/io";
import {IconContext} from "react-icons"

function HeaderRigth({IconShoppingCart}) {
  return (
    <div className="navbar-right">
      <ul>
        <li className="navbar-email">
          platzi@example.com
          <IconContext.Provider value={{className: "header__arrow-icon"}}>
            <IoIosArrowDown />
          </IconContext.Provider>
        </li>

        <DesktopMenu />

        <li className="navbar-shopping-cart">
          <div>
            <img src={IconShoppingCart} alt="shopping cart" />
            <p>2</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export {HeaderRigth}