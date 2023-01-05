import React from 'react'
import DropsProducts from '../components/DropsProducts'
import Footer from '../components/Footer';
import { images } from '../playlist';




export const getStaticProps = async () => {
  return{
    props:{imageList: images}
  }
}



function drops(imageList) {
  console.log(Array.isArray(imageList.imageList))
  return (
    <div className="pt-24 md:pt-36 px-2 bg-[#FFFF]">
      <DropsProducts imageList={imageList.imageList}/>
      <Footer/>
    </div>
  )
}

export default drops
