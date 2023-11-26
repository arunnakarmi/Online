import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Card from '../../components/card/Card'
import Carousal from '../../components/carousal/Carousal'

const Home = () => {
  return (
    <>
      <div>  <Navbar /></div>
    <div>  <Carousal/></div>
      <div className='m-2'>
        <Card/>
      </div>
      <div>   <Footer /></div>
    </>

  )
}

export default Home