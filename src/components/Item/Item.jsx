import React from 'react'
import AddToCarImage from '@icons/bt_add_to_cart.svg'
import {AppContext} from '@context/AppContext'

function Item({item}) {

  const [isSelected,setIsSelected] = React.useState(false)

  const {state,addToCart} = React.useContext(AppContext)
  const addItem = () =>{
    console.log('antes,'+isSelected)
    setIsSelected(prevState => !prevState)
    alert('anadio un objeto')
    console.log(isSelected);
    addToCart(item);
    console.log(state.cart)
  }

  return (
    <>
         <div className="product-card">
            <img src={item.category.image} alt="product-image"/>
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