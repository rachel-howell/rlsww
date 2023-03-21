import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';

const CollectionModule = ({collection, orientation}) => {

    const router = useRouter();

	const goToCollectionPage = (collectionHandle) =>
		router.push(`/collections/${collectionHandle}`);

  return (
    <div className="border border-purple-500 w-7/8 p-5">
        {
            orientation%2==0 ? 
            <div className="flex flex-row">
                <div className="mx-5 border border-red-500">
                    {collection.image.url && <Image src={collection.image.url} alt="rls logo" width="400" height="400"/>}
                </div>
            <div className="border-blue-500 border flex flex-col justify-center items-center">
                <h1 className="black text-6xl">{collection.title}</h1>
                <p>{collection.description}</p>
                <button onClick={()=>goToCollectionPage(collection.handle)} className="border-2 border-black w-fit p-2 hover:bg-gray-200">Shop {collection.title}</button>
            </div>
        </div> :
        <div className="flex flex-row">
            <div className="border-blue-500 border flex flex-col justify-center items-center">
            <h1 className="black text-6xl">{collection.title}</h1>
                <p>{collection.description}</p>
                <button onClick={()=>goToCollectionPage(collection.handle)} className="border-2 border-black w-fit p-2 hover:bg-gray-200">Shop {collection.title}</button>
            </div>
            <div className="mx-5 border border-red-500">
                {collection.image.url && <Image src={collection.image.url} alt="rls logo" width="400" height="400"/>}
            </div>
        </div>
        }
    </div>
    
  )
}

export default CollectionModule
