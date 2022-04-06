import React from 'react'
import { OldOrderItem } from '../OldOderItem/OldOrderItem'

function MyOldOrders({isDesktop}) {
  return (
    <div className="my-order">
      <div className="my-order-container">
        {isDesktop && <h1 className="title">My orders</h1>}

        <div className="my-order-content">
          <OldOrderItem />
          <OldOrderItem />
          <OldOrderItem />
          <OldOrderItem />
          
        </div>
      </div>
    </div>
  );
}

export {MyOldOrders}