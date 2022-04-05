import React from 'react'

function CategoriesBar({isMobile,children}) {
  return (
    <>
      <ul>
        {/* // {<li>
           <a href="/">CATEGORIES</a>
         </li>} */}
        {children}

        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Other</a>
        </li>
      </ul>
    </>
  );
}

export {CategoriesBar}