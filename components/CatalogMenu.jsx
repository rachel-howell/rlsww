import React from 'react'
import { Menu } from '@headlessui/react'

const CatalogMenu = () => {

    const links = [
        { href: '/collections/ground-up-custom-builds', label: 'Premium Custom Builds' },
        { href: '/collections/modified-factory-watches', label: 'Modified Factory Watches' },
        { href: '/collections/casios', label: 'Casios' },
    ]
  return (
    <Menu>
        <Menu.Button><p className="text-gray-600 hover:text-black hover:underline">Catalog</p></Menu.Button>
        <Menu.Items>
        {links.map((link) => (
            <Menu.Item
            as="a"
            key={link.href}
            href={link.href}
            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
            >
            {link.label}
            </Menu.Item>
        ))}
        </Menu.Items>
    </Menu>
  )
}

export default CatalogMenu
