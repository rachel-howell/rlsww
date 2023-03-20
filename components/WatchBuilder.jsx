import React from 'react'
import Image from 'next/image'

const WatchBuilder = () => {
  return (
    <div >
      <div className="flex flex-row justify-around mx-auto border-2 w-3/4">
        <div className="border-green-700 border-2">
            <Image src={require('../assets/watchpic.png')} height="500" width="500" alt="rls logo"/>
          </div>
          <div className="border-orange-700 border-2">
            <h1>Watch Title</h1>
            <p>Price</p>
            <p>Dial</p>
            <p>Case</p>
            <p>Hands</p>
            <p>Strap</p>
            <button>Add to Cart</button>
          </div>
      </div>
    </div>
  )
}

export default WatchBuilder
