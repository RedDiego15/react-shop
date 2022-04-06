import React from 'react'
import { ActuallOrderItem } from '../ActuallOrderItem/ActuallOrderItem'

function MyOrder({children,isDesktop}) {
  return (
    <div className="my-order">
        <div className="my-order-container">
            {isDesktop && <h1 className="title">My order</h1>}
            
            {children}

            <ActuallOrderItem/>
            <ActuallOrderItem/>
            <ActuallOrderItem/>
            <ActuallOrderItem/>
            <ActuallOrderItem/>
        </div>
    </div>
   
  )
}

export {MyOrder}