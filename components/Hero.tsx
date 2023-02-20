import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="w-full h-96 bg-black mt-8 text-white flex flex-col items-center justify-center">
        <p className="text-4xl">Timeless Timepieces</p>
        <button type="button" className="mt-6 border-white border-2 p-3 hover:bg-slate-500">View Collection</button>
    </div>
  )
}

export default Hero