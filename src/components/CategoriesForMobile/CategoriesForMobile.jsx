import React from 'react'
import { CategoriesBar } from '../CategoriesBar/CategoriesBar'

function CategoriesForMobile({children}) {
  return (
    <div className="mobile-menu">
        <CategoriesBar>
          <p className="">Categories</p>
        </CategoriesBar>
    <ul>
      <li>
        <a href="/">My orders</a>
      </li>
      <li>
        <a href="/">My account</a>
      </li>
    </ul>

    {children}
    {/* <ul>
      <li>
        <a href="/" className="email">platzi@example.com</a>
      </li>
      <li>
        <a href="/" className="sign-out">Sign out</a>
      </li>
    </ul> */}
  </div>
  )
}

export {CategoriesForMobile}