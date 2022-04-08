import React from "react";
import {IoIosArrowDown} from "react-icons/io";
import {IconContext} from "react-icons";
import {AppContext} from "@context/AppContext";

function ActuallOrderItem({imageUrl, title, totalPrice, quantity, item}) {
  const {actualizeQuantity,deleteItem} = React.useContext(AppContext);


  const handleChangeQuantity = (e) => {
    const newQuantity = parseInt(e.target.value)
    actualizeQuantity(item, newQuantity);
  };
  return (
    <div className="shopping-cart">
      <figure>
        <img src={imageUrl} alt="bike" />
      </figure>
      <p>{title}</p>
      <div className="shopping-cart__quantity">
        <div className="quantity-container">
          <p>Cant. </p>
          <select
            value={quantity}
            onChange={handleChangeQuantity}
            className="quantity-container__select"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="Eliminar"></option>
          </select>
          <IconContext.Provider value={{className: "quantity-container__arrow"}}>
            <IoIosArrowDown />
          </IconContext.Provider>
        </div>
        <span className="total-item">$ {totalPrice}</span>
      </div>
      <button 
      onClick={()=>deleteItem(item)}
      className='shopping-cart__deleteBtn' type="button">Delete</button>
    </div>
  );
}

export {ActuallOrderItem};
