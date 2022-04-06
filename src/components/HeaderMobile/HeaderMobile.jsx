import React from 'react'

const HeaderMobile = ({children,selector} = {}) => {
  return (
    <div className={`header-row ${selector}`}>
        {children}
    </div>
  )
}

export {HeaderMobile}