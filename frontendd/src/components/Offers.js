import React from 'react'
import girl3 from '../assets/girl3.jpg'
import './Offers.css'

function Offers() {
  return (
    <div className='offers'>
        <div className='offerleft'>
            <h1>EXCLUSIVE</h1>
            <h1>OFFERS FOR YOU</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offerright'>
            <img src={girl3} alt=""/>

        </div>
    </div>
  )
}

export default Offers