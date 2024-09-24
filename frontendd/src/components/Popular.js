import React, { useEffect, useState } from 'react'
import Item from './Item'
import './Popular.css'

function Popular() {
  const [data_product,setData_product]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/popularinwomen')
    .then((response)=>response.json())
    .then((data)=>setData_product(data));
  },[])

  return (
    <div className='popular'>
        <h1>POPULAR IN WOMENS</h1>
        <hr/>
        <div className='popularItem'>
            {data_product.map((item,i)=>{
                return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular