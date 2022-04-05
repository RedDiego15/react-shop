import React from 'react'
import { ProductsContainer } from '../../Containers/ProductsContainer'
import { Item } from '../Item/Item'

function Products() {
    let items =[]
    for(let i=0;i<15;i++){
        items.push(<Item key={i}/>)
    }

    return (
        <ProductsContainer>
            <section className="main-container">
                <div className="cards-container">
                    {items.map((item) => (item))}
                </div>
            </section>
         </ProductsContainer>
    
  )
}

export {Products}