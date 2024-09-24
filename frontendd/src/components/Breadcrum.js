import React from 'react';
import './Breadcrum.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Breadcrum({ product }) {
  // If product doesn't exist or category/name is missing, provide fallbacks
  const category = product?.category || 'Category not found';
  const name = product?.name || 'Product not found';

  return (
    <div className='breadcrum'> 
      HOME <ArrowForwardIosIcon /> SHOP <ArrowForwardIosIcon /> {category} <ArrowForwardIosIcon /> {name}
    </div>
  );
}

export default Breadcrum;
