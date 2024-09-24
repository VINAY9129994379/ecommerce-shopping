import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.jpg'
import arrow_icon from '../assets/arrow_icon.jpg'
import girl_img from '../assets/girl_img.jpg'

function Hero() {
  return (
    <div className='hero'>
        <div className='heroleft'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div className='handIcon'>
                <p>NEW</p>
                <img src={hand_icon} alt=""/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className='herobtn'>
            <div>Latest collections</div>
            <img src={arrow_icon} alt=""/>
        </div>
        <div className='heroright'>

        <img src={girl_img} alt=""/>


        </div>
    </div>
  )
}

export default Hero