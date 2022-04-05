import React from 'react'
import {IconContext} from "react-icons"
import {FaSearch} from "react-icons/fa"
import {IoIosArrowDown} from "react-icons/io"
function SearchItem({children}) {
  return (
    <form action="" className="search">
      <div className="search__input-container">
        <input
          type="text"
          placeholder="Search Product"
          className="search__input"
        />
        <IconContext.Provider value={{className: "search_icon"}}>
          <FaSearch />
        </IconContext.Provider>
      </div>

      <nav className="navbar-left navbar__search">{children}</nav>
      <div className="search__order">
        <div className="search__input-container">
          <label forhtml="order-list">Order: </label>
          <input list="order" id="order-list" className="input__order"></input>
          <IconContext.Provider value={{className: "order_icon"}}>
            <IoIosArrowDown />
          </IconContext.Provider>
          <datalist id="order">
            <option value="Most popular"></option>
            <option value="Trending"></option>
            <option value="Price"></option>
          </datalist>
        </div>
      </div>
    </form>
  );
}

export {SearchItem}