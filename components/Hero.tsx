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

    <div className="w-full h-fit flex flex-col items-center justify-start px-3">
      <div className="max-w-5xl mx-auto text-center ">
        <p className="sm:text-7xl text-6xl mb-4 sm:px-0 px-2 mt-12 font-lato">Custom Watch Mods</p>
        <p className="sm:text-3xl text-xl mb-5 font-lato">Indulge in the world of personalized design and customization with our hand-built custom watches. Every timepiece is crafted with meticulous attention to detail, ensuring that each watch is as unique as its owner.</p>
        <p className="text-sm italic text-gray-500">RSWW is not affiliated with any brands.</p>
      </div>
    </div>

  </div>
  )
}

export default Hero
