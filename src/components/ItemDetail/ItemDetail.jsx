import React from 'react'
import IconClose from '../../../icons/icon_close.svg'
import BtAddCart from '../../../icons/bt_add_to_cart.svg'
function ItemDetail() {
  return (
    <aside className="product-detail">
        <div className="product-detail-close">
            <img src={IconClose} alt="close" className="close-icon"/>
        </div>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"/>
        <div className="product-info__detail">
            <p>$35,00</p>
            <p>Bike</p>
            <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
            <button className="primary-button add-to-cart-button">
                <img src={BtAddCart} alt="add to cart"/>
                Add to cart
            </button>
        </div>
     </aside>
  )
}

export {ItemDetail}