import React from 'react'
import { ActuallOrderItem } from '@components/ActuallOrderItem/ActuallOrderItem'
import {OrderContainer} from '@containers/OrderContainer';
function CheckOut({children}) {
  return (
    <OrderContainer>
      <section className="my-order check-out">
        {children}
        <div className="my-order-container">
          <ActuallOrderItem />
          <ActuallOrderItem />
          <ActuallOrderItem />
          <ActuallOrderItem />
          <ActuallOrderItem />
        </div>
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$150.00</p>
        </div>

        <button type="button"className="primary-button">Checkout</button>
      </section>
    </OrderContainer>
  );
}

export {CheckOut}