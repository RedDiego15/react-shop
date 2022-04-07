import React from 'react'
import { ProductsContainer } from '@containers/ProductsContainer'
import { Item } from '@components/Item/Item'
import {useGetProducts} from '@hooks/useGetProducts'
function Products() {

    const {products,isLoading,errorGetProducts} = useGetProducts(15)
    
    return (
        <ProductsContainer>
            <section className="main-container">
                <div className="cards-container">
                    {isLoading && (<p>Loading...</p>)}

                    {products.map((item)=> (<Item 
                    ImgUrl = {item.category.image}
                    item={item}
                    key={item.id}/>))}
                </div>
            </section>
         </ProductsContainer>
    
  )
}

export {Products}