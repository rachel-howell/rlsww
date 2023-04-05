import React from 'react'
import Image from 'next/image'
import SettingsIcon from '@mui/icons-material/Settings';
import DiamondIcon from '@mui/icons-material/Diamond';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


const Hero = () => {
  return (
    <div className="flex flex-col items-center">
    <div className="flex flex-row justify-center mt-5">
      <Image src={require('../assets/hero.png')} className="w-screen" alt="rls logo"/> 
    </div>

    <div className="w-full h-64 flex flex-col items-center justify-start mb-0 px-3">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-7xl mb-4  mt-12 font-lato">Custom Watch Mods</p>
        <p className="text-3xl mb-5 font-lato">Indulge in the world of personalized design and customization with our hand-built custom watches. Every timepiece is crafted with meticulous attention to detail, ensuring that each watch is as unique as its owner.</p>
        <p className="text-sm italic text-gray-500">RLSWW is not affiliated with any brands.</p>
      </div>
    </div>

    {/* <div className="flex flex-wrap justify-around border-4 w-1/2">
      <div className="flex flex-col items-center basis-1/3">
        <SettingsIcon />
        <p className="text-xl">Handbuilt in the USA</p>
        <p className="text-sm">Custom built watches crafted with care</p>
      </div>

      <div className="flex flex-col items-center basis-1/3">
        <DiamondIcon />
        <p className="text-xl">Quality Guarantee</p>
        <p className="text-sm">Each watch uses high quality parts</p>
      </div>
      
      <div className="flex flex-col items-center basis-1/3">
        <LocalShippingIcon />
        <p className="text-xl">Fast Shipping</p>
        <p className="text-sm">Domestic and International</p>
      </div>
    </div> */}

  </div>
  )
}

export default Hero
