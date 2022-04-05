import React from 'react'
import { ActuallOrderItem } from '../ActuallOrderItem/ActuallOrderItem'

function CheckOut() {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <ActuallOrderItem/>
        <ActuallOrderItem/>
        <ActuallOrderItem/>
        <ActuallOrderItem/>
        <ActuallOrderItem/>
      </div>
      <div className="order">
        <p>
          <span>Total</span>
        </p>
        <p>$150.00</p>
      </div>

      <button className="primary-button">
        Checkout
      </button>
</div>
  )
}

export {CheckOut}