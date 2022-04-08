import React from 'react'
import { ActuallOrderItem } from '@components/ActuallOrderItem/ActuallOrderItem'
import {OrderContainer} from '@containers/OrderContainer';
import {AppContext} from '@context/AppContext'

function CheckOut({children}) {
  const {state:{cart}} = React.useContext(AppContext);
  const calculateTotal = ()=>{
    return cart.reduce((prevValue, currentValue) => prevValue + currentValue.totalPrice, 0)
  }

  return (
    <OrderContainer>
      <section className="my-order check-out">
        {children}
        <div className="my-order-container">
          {cart.map((item) => (
              <ActuallOrderItem key={`orderItem-${item.id}`}
                title={item.title}
                imageUrl={item.category.image}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
                item={item}
              />
            
          ))}
        </div>
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$ {calculateTotal()}</p>
        </div>

        <button type="button" className="primary-button">
          Checkout
        </button>
      </section>
    </OrderContainer>
  );
}

export {CheckOut}