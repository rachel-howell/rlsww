import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import CatalogMenu from '../components/CatalogMenu';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {}

const NavBar = (props: Props) => {

    const logoStyle = {
        height: '8em',
        width: 'auto',
        cursor: 'pointer',
        minWidth: '8em'
    }

    const iconStyle = {
        height: '3em'
    }
    
 return (
    <div>
        <div className="flex flex-row lg:items-center justify-between lg:px-5 pt-3 w-fill mx-auto z-20">

            {/* Menu (Md or smaller) */}
            <div className="lg:hidden basis-1/4 mt-4 lg:mt-0">
                <MenuIcon className="cursor-pointer ml-3" fontSize="large"/>
            </div>
            
            {/* Logo: */}
            <div className="basis-3/4 lg:basis-1/4 flex justify-center ml-3 lg:ml-0">
                <Link href="/"><Image src={require('../assets/rls_white.png')} style={logoStyle} alt="rls logo"/></Link>
            </div>

            <div className="lg:flex basis-3/4 p-3 hidden whitespace-nowrap justify-center">
                <div className="flex flex-row items-center justify-between text-md w-full">
                    <CatalogMenu />
                    <Link href='/service' className="cursor-pointer text-gray-600 hover:text-black hover:underline lg:px-4">MODIFICATION SERVICES</Link>
                    <Link href='/build' className="cursor-pointer text-gray-600 hover:text-black hover:underline lg:px-4">VIRTUAL MOD BUILDER</Link>
                    <Link href='/warranty' className="cursor-pointer text-gray-600 hover:text-black hover:underline lg:px-4">WARRANTY</Link>
                    <Link href='/faq' className="cursor-pointer text-gray-600 hover:text-black hover:underline lg:px-4">FAQ</Link>
                    <Link href='/contact' className="cursor-pointer text-gray-600 hover:text-black hover:underline lg:px-4">CONTACT</Link>
                </div>
            </div>

            <div className=" whitespace-nowrap basis-1/4 flex flex-row justify-end lg:justify-center mt-4 mr-3 lg:mr-0 lg:mt-0">
                {/* Search Bar: */}
                <SearchIcon fontSize="large" className="cursor-pointer"/>

                {/* Cart: */}
                <Link href='/cart'><ShoppingCartIcon fontSize="large" className="cursor-pointer"/></Link>
            </div>
            
        </div>
        
    </div>
 )
}

export default NavBar
