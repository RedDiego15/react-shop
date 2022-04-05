import React from 'react'
import { CategoriesBar } from '../CategoriesBar/CategoriesBar'

function MobileCategories() {
  return (
    <div className="mobile-menu">
        <CategoriesBar/>
    <ul>
      <li>
        <a href="/">My orders</a>
      </li>
      <li>
        <a href="/">My account</a>
      </li>
    </ul>

    <ul>
      <li>
        <a href="/" className="email">platzi@example.com</a>
      </li>
      <li>
        <a href="/" className="sign-out">Sign out</a>
      </li>
    </ul>
  </div>
  )
}

export {MobileCategories}