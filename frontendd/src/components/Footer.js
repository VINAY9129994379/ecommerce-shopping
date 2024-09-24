import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import shopping from '../assets/shopping.jpg'

function Footer() {
  return (
    <div className='footer'>
        <div className='footerlogo'>
            <img src={shopping} alt=""/>
            <p>!SHOPING</p>
        </div>
        <ul className='footerLinks'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footersocialicon'>
            <div className='footericoncontainer'>
                     <InstagramIcon/>
            </div>
            <div className='footericoncontainer'>
                <PinterestIcon/>
            </div>
            <div className='footericoncontainer'>
                  <WhatsAppIcon/>
            </div>
        </div>
        <div className='footercopyright'>
            <hr/>
            <p>Copyright @ 2024 - All</p>
        </div>
    </div>
  )
}

export default Footer