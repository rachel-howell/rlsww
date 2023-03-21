import React from 'react';
import { SocialIcon } from 'react-social-icons';
import CatalogMenu from './CatalogMenu';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex flex-row max-w-3xl mx-auto items-center justify-around mt-5 text-sm">
            <CatalogMenu />
            <Link href='/service' className="cursor-pointer text-gray-600 hover:text-black hover:underline">Modification Services</Link>
            <Link href='/build' className="cursor-pointer text-gray-600 hover:text-black hover:underline">Virtual Mod Builder</Link>
            <Link href='/warranty' className="cursor-pointer text-gray-600 hover:text-black hover:underline">Warranty</Link>
            <Link href='/faq' className="cursor-pointer text-gray-600 hover:text-black hover:underline">FAQ</Link>
            <Link href='/contact' className="cursor-pointer text-gray-600 hover:text-black hover:underline">Contact</Link>
        </div>

        <div>
          <SocialIcon url="https://www.instagram.com/rlswatchworks/" />
          <SocialIcon url="https://www.tiktok.com/@rlswatchworks" />
        </div>

        <div>
        </div>

    </div>
  )
}

export default Footer
