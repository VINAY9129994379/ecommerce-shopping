import React from 'react'
import './RelatedProduct.css'
import Item from './Item'
import data_product from '../assets/data'
function RelatedProduct() {
  return (
    <div className='relatedproduct'>
        <h1>Related Products</h1>
        <hr/>
        <div className='relatedproductItem'>
            {
                data_product.map((item,i)=>{
                    return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old={item.old_price}/>

                })
            }
        </div>
    </div>
  )
}

export default RelatedProduct