import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
function Item(props) {
  return (
    <div className='item'>
        <div className='Itemcontainer'>
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=""/></Link>
            <p>{props.name}</p>
        <div className='itemPrice'>
               <p> ${props.new_price}</p>
            <div className='itempriceold'>
                
               <p> ${props.old_price}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Item