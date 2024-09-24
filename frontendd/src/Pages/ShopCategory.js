import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Item from '../components/Item';
import './ShopCategory.css'

function ShopCategory(props) {
    const {all_product}=useContext(ShopContext);
  return (
    <div className='shopcategory'>
        <img className='shopcategorybanner' src={props.banner} alt=""/>
        <div className='shopcategoryindexshot'>
            <p>
                <span>showing 1-12</span>out of 36 products
            </p>
            <div className='shopcategorysort'>
                sort by <ArrowDropDownIcon/>
            </div>
        </div>
        <div className='shopcategoryproducts'>
            {all_product.map((item,i)=>{
                if(props.category===item.category){
                    return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old={item.old_price}/>

                }
                else{
                    return null;
                }
            })

            }
        </div>
        <div className='shopcategoryloadmore'>
            Explore More
        </div>

    </div>

  )
}

export default ShopCategory