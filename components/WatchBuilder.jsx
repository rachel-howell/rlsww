import React, { useState } from 'react'
import Image from 'next/image'

const WatchBuilder = () => {

  const [ hands, setHands ] = useState("");
  const [ bracelet, setBracelet ] = useState("");
  const [ chapterRing, setChapterRing ] = useState("");
  const [ bezelInsert, setBezelInsert ] = useState("");

  return (
    <div >
      <div className="flex flex-row justify-around mx-auto border-2 w-3/4">
        <div className="border-green-700 border-2">
            <Image src={require('../assets/watchpic.png')} height="500" width="500" alt="rls logo"/>
          </div>
          <div className="border-orange-700 border-2">
            <h1>Watch Title</h1>
            <p>Hands</p>
            <p>Bracelet</p>
            <p>Chapter Ring</p>
            <p>Bezel Insert</p>
            <button>Add to Cart</button>
          </div>
      </div>
    </div>
  )
}

export default WatchBuilder
