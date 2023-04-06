import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const CatalogMenu = ({title}) => {

    const links = [
        { href: '/collections/ground-up-custom-builds', label: 'Premium Custom Builds' },
        { href: '/collections/modified-factory-watches', label: 'Modified Factory Watches' },
        { href: '/collections/casios', label: 'Casios' },
    ]
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md text-md text-gray-600 hover:text-black hover:underline">
          {title}
        </Menu.Button>
      </div>
      <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute bg-white left-0 mt-1 w-56 origin-top-left rounded-md divide-y divide-slate-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
          {links.map((link, id) => (
            <div className="px-1 py-1" key={id}>
              <Menu.Item
              as="a"
              key={link.href}
              href={link.href}
              >
                {({ active }) => (
                  <button key={`${id}+${link.href}`}
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >{link.label}</button>)}
                
              </Menu.Item>
            </div>
          ))}
          </Menu.Items>

      </Transition>
    </Menu>
    
  )
}

export default CatalogMenu
