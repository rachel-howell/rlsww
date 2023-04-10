import React from 'react';
import { SocialIcon } from 'react-social-icons';
import CatalogMenu from './CatalogMenu';
import Link from 'next/link';

const Footer = () => {
  return (
      <div className="flex flex-col lg:flex-row items-center bg-[#dedcdc] lg:h-52 mt-5">
        <div className="flex flex-col mx-auto items-center mt-5 text-sm basis-1/3">
            <h1 className="mb-1">LINKS</h1>
            
            <Link href='/collections/ground-up-custom-builds' className="cursor-pointer text-gray-600 hover:text-black hover:underline">Premium Custom Builds</Link>
            <Link href='/collections/modified-factory-watche' className="cursor-pointer text-gray-600 hover:text-black hover:underline">Modified Custom Watches</Link>
            <Link href='/collections/casios' className="cursor-pointer text-gray-600 hover:text-black hover:underline">Casios</Link>
            <Link href='/service' className="cursor-pointer text-gray-600 hover:text-black hover:underline">Modification Services</Link>
            <Link href='/build' className="cursor-pointer text-gray-600 hover:text-black hover:underline">Virtual Mod Builder</Link>

        </div>

        <div className="flex flex-col mx-auto items-center justify-around mt-5 lg:mt-0 text-sm basis-1/3 mb-3 lg:mb-0">
          <h1 className="mb-1">CUSTOMER SERVICE</h1>
            <Link href='/warranty' className="cursor-pointer text-gray-600 hover:text-black hover:underline">Warranty</Link>
            <Link href='/faq' className="cursor-pointer text-gray-600 hover:text-black hover:underline">FAQ</Link>
            <Link href='/contact' className="cursor-pointer text-gray-600 hover:text-black hover:underline">Contact</Link>
        </div>

        <div className="basis-1/3 flex flex-row justify-center">
          <SocialIcon className="mx-2" url="https://www.instagram.com/rswatchworks/" />
          <SocialIcon className="mx-2" url="https://www.tiktok.com/@rlswatchworks" />
        </div>

        <div>
        </div>

    </div>
  )
}

export default Footer
