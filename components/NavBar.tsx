import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import CatalogMenu from '../components/CatalogMenu';

type Props = {}

const NavBar = (props: Props) => {

    const logoStyle = {
        height: '12em',
        width: 'auto',
        cursor: 'pointer'
    }

    const iconStyle = {
        height: '3em'
    }
    
 return (
    <div>
        <div className="flex flex-row items-center justify-between px-5 pt-3 max-w-7xl mx-auto z-20">
            {/* Search Bar: */}
            <SearchIcon fontSize="large" className="mb-44 cursor-pointer"/>

            {/* Logo: */}
            <div><Link href="/" className="cursor-pointer text-gray-600 hover:text-black hover:underline"><Image src={require('../assets/rls_white.png')} style={logoStyle} alt="rls logo"/></Link></div>

            {/* Cart: */}
            <Link href='/cart'><ShoppingCartIcon fontSize="large" className="mb-44 cursor-pointer"/></Link>
        </div>
        <div className="flex flex-row max-w-3xl mx-auto items-center justify-around mt-5 text-sm">
            <CatalogMenu />
            <Link href='/service' className="cursor-pointer text-gray-600 hover:text-black hover:underline">Modification Services</Link>
            <Link href='/build' className="cursor-pointer text-gray-600 hover:text-black hover:underline">Virtual Mod Builder</Link>
            <Link href='/warranty' className="cursor-pointer text-gray-600 hover:text-black hover:underline">Warranty</Link>
            <Link href='/faq' className="cursor-pointer text-gray-600 hover:text-black hover:underline">FAQ</Link>
            <Link href='/contact' className="cursor-pointer text-gray-600 hover:text-black hover:underline">Contact</Link>
        </div>
        
    </div>
 )
}

export default NavBar
