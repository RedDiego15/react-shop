import React from 'react'
import { OldOrderItem } from '../OldOderItem/OldOrderItem'

function MyOldOrders() {
  return (
    <div class="my-order">
      <div class="my-order-container">
        <h1 class="title">My orders</h1>

        <div class="my-order-content">
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