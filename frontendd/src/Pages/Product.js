import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum';
import ProductDisplay from '../components/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox';
import RelatedProduct from '../components/RelatedProduct';

function Product() {
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product=all_product.find((e)=>e.id===Number(productId));
  return (
    <div className='product'>
       <Breadcrum product={product}/>
       <ProductDisplay product={product}/>
       <DescriptionBox/>
       <RelatedProduct/>
    </div>
  )
}

export default Product