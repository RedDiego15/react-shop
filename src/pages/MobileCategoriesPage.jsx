import React from 'react'
import {CategoriesForMobile} from '@components/CategoriesForMobile/CategoriesForMobile'
const MobileCategoriesPage = () => {
  return (
    <>
      <CategoriesForMobile>
        <ul>
          <li>
            <a href="/" className="email">
              platzi@example.com
            </a>
          </li>
          <li>
            <a href="/" className="sign-out">
              Sign out
            </a>
          </li>
        </ul>
      </CategoriesForMobile>
    </>
  );
}

export {MobileCategoriesPage}