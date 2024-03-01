import React from 'react'
import AllProducts from '../AllProducts/AllProducts'
import HomeSlider from '../HomeSlider/HomeSlider'

const Home = () => {
  return (
    <div className='mt-32'>
        <HomeSlider/>
        <AllProducts/>
    </div>
  )
}

export default Home