import React from 'react'
import Arrow from '../../../icons/flechita.svg'
function OldOrderItem() {
  return (
    <div className="order">
        <p>
        <span>03.25.21</span>
        <span>6 articles</span>
        </p>
        <p>$560.00</p>
        <img src={Arrow} alt="arrow"/>
    </div>
  )
}

export {OldOrderItem}