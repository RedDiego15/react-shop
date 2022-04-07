import React from 'react'
import AddToCar from '@icons/bt_add_to_cart.svg'

function Item({ImgUrl,title,price}) {
  const [isSelected,setIsSelected] = React.useState(false)

  const addItem = () =>{
    console.log('antes,'+isSelected)
    setIsSelected(prevState => !prevState)
    alert('anadio un objeto')
    console.log(isSelected);
  }

  return (
    <>
         <div className="product-card">
            <img src={ImgUrl} alt="product-image"/>
            <div className="product-info">
            <div>
                <p>{`$ ${price}`}</p>
                <p>{title}</p>
            </div>
            <figure onClick={addItem}>
                <img src={AddToCar} alt="product-image"/>
            </figure>
            </div>
        </div>
    </>
  )
}

export {Item}