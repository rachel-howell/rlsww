import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';

const CollectionModule = ({collection, orientation}) => {

    const router = useRouter();

	const goToCollectionPage = (collectionHandle) =>
		router.push(`/collections/${collectionHandle}`);

  return (
    <div>
        {
            orientation%2==0 ? 
            <div className="flex flex-row">
                <div className="mx-5">
                    {collection.image.url && <Image src={collection.image.url} alt="rls logo" width="400" height="400"/>}
                </div>
            <div className="border-blue-500 border flex flex-col justify-center">
                <h1 className="black text-6xl">{collection.title}</h1>
                <p>{collection.description}</p>
                <button onClick={()=>goToCollectionPage(collection.handle)}>Shop {collection.title}</button>
            </div>
        </div> :
        <div className="flex flex-row">
            <div>
                <h1>{collection.title}</h1>
                <p>{collection.description}</p>
                <button onClick={()=>goToCollectionPage(collection.handle)}>Shop {collection.title}</button>
            </div>
            <div>
                {collection.image.url && <Image src={collection.image.url} alt="rls logo" width="400" height="400"/>}
            </div>
        </div>
        }
    </div>
    
  )
}

export default CollectionModule
