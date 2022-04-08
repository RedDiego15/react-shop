import React from 'react'
import { ActuallOrderItem } from '../ActuallOrderItem/ActuallOrderItem'
import {AppContext} from '@context/AppContext'

function MyOrder({children,isDesktop}) {
  const {state:{cart}} = React.useContext(AppContext);
  return (
    <div className="my-order">
        <div className="my-order-container">
            {isDesktop && <h1 className="title">My order</h1>}
            
            {children}
            {/* {cart.map((item) =>(<>
            <ActuallOrderItem 
              title={item.title}
              imageUrl={item.category.image}
              price={item.price}
              key = {`orderItem- ${item.id}`} />
              
            </>))} */}

            
        </div>
    </div>
   
  )
}

export {MyOrder}