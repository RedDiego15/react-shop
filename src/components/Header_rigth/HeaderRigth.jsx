import React from 'react'
import {DesktopMenu} from '@components/DesktopMenu/DesktopMenu'
import {IoIosArrowDown} from "react-icons/io";
import {IconContext} from "react-icons"

function HeaderRigth({IconShoppingCart}) {
  const [isLogged,setIsLogged] = React.useState(true);
  const handleLoginClick = ()=>{
    alert('se va a loggear');
  }
  return (
    <div className="navbar-right">
      <ul>
        <li className="navbar-email">
          {isLogged && (
            <>
              platzi@example.com
              <IconContext.Provider value={{className: "header__arrow-icon"}}>
                <IoIosArrowDown />
              </IconContext.Provider>
              <DesktopMenu />
            </>
          )}
          {!isLogged && (
            <p onClick={handleLoginClick} className="login-desktop">
              Sign in
            </p>
          )}
        </li>

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