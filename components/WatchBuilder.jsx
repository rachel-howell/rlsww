import React, { useState } from 'react'
import Image from 'next/image'

const WatchBuilder = () => {

  const [ hand, setHand ] = useState(require('../assets/hands1.png'));
  const [ bracelet, setBracelet ] = useState(require('../assets/bracelet1.png'));
  const [ chapterRing, setChapterRing ] = useState("");
  const [ bezelInsert, setBezelInsert ] = useState(require('../assets/bezel1.png'));

  const customStyle = {
    minHeight: '70vh'
  }

  const bracelets = [
    {title: "bracelet1", src: require('../assets/bracelet1.png')},
    {title: "bracelet2", src: require('../assets/bracelet2.png')}
  ]

  const hands = [
    {title: "hands1", src: require('../assets/hands1.png')},
    {title: "hands2", src: require('../assets/hands2.png')}
  ]

  const bezelInserts = [
    {title: "bezel1", src: require('../assets/bezel1.png')},
    {title: "bezel2", src: require('../assets/bezel2.png')}
  ]

  return (
    <div>
      <p className="text-center text-6xl">Note: This page is under construction.</p>
      <p className="text-center text-6xl">For demonstration purposes only.</p>
      <div className="flex flex-wrap justify-around mx-auto border-2 border-red-500 w-3/4 mt-5" style={customStyle}>
        <div className="border-green-700 border-2">
            <Image src={bracelet} className="absolute" height="500" width="500" alt="rls logo"/>
            <Image src={bezelInsert} className="absolute" height="500" width="500" alt="rls logo"/>
            <Image src={hand} height="500" width="500" alt="rls logo"/>
            {/* <Image src={bracelet} className="absolute" height="500" width="500" alt="rls logo"/>
            <Image src={bezelInsert} className="absolute" height="500" width="500" alt="rls logo"/>
            <Image src={hand} height="500" width="500" alt="rls logo"/> */}
          </div>
          <div className="border-green-700 border-4 text-2xl w-2/5">
            <div className="flex flex-col">
              <p>Hands</p>
              <button className="border-2 bg-black text-white p-1 hover:bg-gray-600 duration-300" onClick={()=>setHand(hands[0].src)}>Option 1</button>
              <button className="border-2 bg-black text-white p-1 hover:bg-gray-600 duration-300" onClick={()=>setHand(hands[1].src)}>Option 2</button>
            </div>


            <div className="flex flex-col">
              <p>Bracelet</p>
              <button className="border-2 bg-black text-white p-1 hover:bg-gray-600 duration-300" onClick={()=>setBracelet(bracelets[0].src)}>Option 1</button>
              <button className="border-2 bg-black text-white p-1 hover:bg-gray-600 duration-300" onClick={()=>setBracelet(bracelets[1].src)}>Option 2</button>
            </div>

            <div className="flex flex-col">
              <p>Bezel Insert</p>
              <button className="border-2 bg-black text-white p-1 hover:bg-gray-600 duration-300" onClick={()=>setBezelInsert(bezelInserts[0].src)}>Option 1</button>
              <button className="border-2 bg-black text-white p-1 hover:bg-gray-600 duration-300" onClick={()=>setBezelInsert(bezelInserts[1].src)}>Option 2</button>
            </div>
            
            <p>Chapter Ring</p>

            <button className="border-2 bg-black text-white p-1 hover:bg-gray-600 duration-300 mt-8">Add to Cart</button>
          </div>
      </div>
      </div>
  )
}

export default WatchBuilder
