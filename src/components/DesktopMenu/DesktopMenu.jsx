import React from 'react'

function DesktopMenu() {
  return (
    <>
         <div className="desktop-menu">
            <ul className="desktop-menu__list">
            <li>
                <a href="/" className="title">My orders</a>
            </li>

            <li>
                <a href="/">My account</a>
            </li>

            <li>
                <a href="/">Sign out</a>
            </li>
            </ul>
        </div>
    </>
  )
}

export  {DesktopMenu}