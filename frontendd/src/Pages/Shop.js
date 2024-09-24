import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Offers from '../components/Offers'
import NewCollection from '../components/NewCollection'
import NewLetter from '../components/NewLetter'

function Shop() {
  return (
    <div className='shop'>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewLetter/>
    </div>
  )
}

export default Shop