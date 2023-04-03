import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { Fragment } from 'react'

function SideMenu({menuButton}) {

  const links = [
    { href: '/collections/ground-up-custom-builds', label: 'Premium Custom Builds' },
    { href: '/collections/modified-factory-watches', label: 'Modified Factory Watches' },
    { href: '/collections/casios', label: 'Casios' },
    { href: '/service', label: 'Modification Services'},
    { href: '/build', label: 'Virtual Mod Builder'},
    { href: '/warranty', label: 'Warranty'},
    { href: '/faq', label: 'FAQ'},
    { href: '/contact', label: 'Contact'}
  ]
  return (
    <Popover className="relative">
      <Popover.Button>{menuButton}</Popover.Button>
      <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
        <Popover.Panel className="absolute z-10 ml-3 bg-white border-2 rounded-md p-3">
          <div className="flex flex-col">
            {
              links.map((link)=>(
                <Link href={link.href} className="cursor-pointer text-gray-600 hover:text-black rounded-md hover:bg-gray-100 lg:px-4 ml-1 p-2">{link.label}</Link>
              ))
            }
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default SideMenu
