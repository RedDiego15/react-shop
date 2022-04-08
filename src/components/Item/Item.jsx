import React from 'react'
import AddToCarImage from '@icons/bt_add_to_cart.svg'
import {AppContext} from '@context/AppContext'

function Item({item}) {

  const [isSelected,setIsSelected] = React.useState(false)

  const {state:{toggleItemInfo},addToCart,setToggleItemInfo} = React.useContext(AppContext)
  const addItem = () =>{
    setIsSelected(prevState => !prevState)  
    addToCart(item);
    
  }

  return (
    <>
         <div className="product-card">
            <img 
            onClick={() => setToggleItemInfo()}
            src={item.category.image} alt="product-image"/>
            <div className="product-info">
            <div>
                <p>{`$ ${item.price}`}</p>
                <p>{item.title}</p>
            </div>
            <figure onClick={addItem}>
                <img src={AddToCarImage} alt="product-image"/>
            </figure>
            </div>
        </div>
    </>
  )
}

export {Item}