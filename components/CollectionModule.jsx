import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';

const CollectionModule = ({collection, orientation}) => {

    const router = useRouter();

	const goToCollectionPage = (collectionHandle) =>
		router.push(`/collections/${collectionHandle}`);

  return (
    <div className="border-4 border-purple-500 w-screen p-5 flex justify-center">
        {
            orientation%2==0 ? 
            <div className="flex border-4 border-green-600 flex-wrap justify-center">
                <div className="mx-5 border border-red-500">
                    {collection.image.url && <Image src={collection.image.url} alt="rls logo" width="500" height="500"/>}
                </div>
            <div className="border-blue-500 border flex flex-col justify-center items-center">
                <h1 className="black text-6xl mb-6">{collection.title}</h1>
                <p className="mb-6">{collection.description}</p>
                <button onClick={()=>goToCollectionPage(collection.handle)} className="border-2 bg-black w-fit p-2 text-white hover:opacity-50 duration-200 px-6 text-xl">Shop {collection.title}</button>
            </div>
        </div> :
        <div className="flex flex-wrap justify-center">
            <div className="border-blue-500 border flex flex-col justify-center items-center order-2 xl:order-1">
                <h1 className="black text-6xl mb-6">{collection.title}</h1>
                <p className="mb-6">{collection.description}</p>
                <button onClick={()=>goToCollectionPage(collection.handle)} className="border-2 bg-black w-fit p-2 text-white hover:opacity-50 duration-200 px-6 text-xl">Shop {collection.title}</button>
            </div>
            <div className="mx-5 border border-red-500 order-1 xl:order-2">
                {collection.image.url && <Image src={collection.image.url} alt="rls logo" width="500" height="500"/>}
            </div>
        </div>
        }
    </div>
    
  )
}

export default CollectionModule
