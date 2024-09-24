import React, { useContext } from 'react'
import './ProductDisplay.css'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { ShopContext } from '../context/ShopContext';
function ProductDisplay(props) {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>

            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt=""/>
            </div>

        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-start'>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarBorderIcon/>
             <p>(122)</p>

            </div>
            <div className='productdisplay-right-price'>
                <div className='productdisplay-right-price-old'>${product.old_price}</div>
                <div className='productdisplay-right-price-new'>${product.new_price}</div>

            </div>
            <div className='productdisplay-right-discription'>
                A lightwieght, usualyknitted,pullover shirt ,close fitting and with a round neckline and sort sleeves,worn as an undershirt or overtern...
            </div>
            <div className='productdisplay-right-size'>
                <h1>Select Size</h1>
                <div className='productdisplay-right-size'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>

                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category:</span>Womens,T-shirt,Crop top</p>
            <p className='productdisplay-right-category'><span>Tags:</span>Mordern,Latest</p>


        </div>
    </div>
  )
}

export default ProductDisplay