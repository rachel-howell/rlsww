import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

type Props = {}

const NavBar = (props: Props) => {

    const logoStyle = {
        height: '15em',
        width: 'auto',
        cursor: 'pointer'
    }

    const iconStyle = {
        height: '3em'
    }
    
 return (
    <div>
        <div className="flex flex-row items-center justify-between px-5 pt-3 max-w-6xl mx-auto z-20">
            {/* Search Bar: */}
            <SearchIcon fontSize="large" className="mb-44 cursor-pointer"/>

            {/* Logo: */}
            <div><Image src={require('../assets/rls_white.png')} style={logoStyle} alt="rls logo"/></div>

            {/* Cart: */}
            <ShoppingCartIcon fontSize="large" className="mb-44 cursor-pointer"/>
        </div>
        <div className="flex flex-row max-w-lg mx-auto items-center justify-between mt-5">
            <Link href="/" className="cursor-pointer text-gray-600 hover:text-black hover:font-bold">Home</Link>
            <Link href='/listings' className="cursor-pointer text-gray-600 hover:text-black hover:font-bold">Listings</Link>
            <Link href='/service' className="cursor-pointer text-gray-600 hover:text-black hover:font-bold">Service</Link>
            <Link href='/about' className="cursor-pointer text-gray-600 hover:text-black hover:font-bold">About</Link>
        </div>
    </div>
 )
}

export default NavBar