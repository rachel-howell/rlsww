import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal({ buttonTitle, services, total }) {
let [isOpen, setIsOpen] = useState(false)

function closeModal() {
    setIsOpen(false)
}

function openModal() {
    setIsOpen(true)
}

return (
<>
    <div className="inset-0 flex items-center justify-center">
    <button
        type="button"
        onClick={openModal}
        className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
        {buttonTitle}
    </button>
    </div>

    <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                as="h3"
                className="text-2xl font-medium leading-6 text-gray-900"
                >
                Service Inquiry
                </Dialog.Title>
                <div className="mt-2">
                    <div className="flex flex-col mb-1">
                        <p className="text-lg font-medium leading-6 text-gray-900 mb-1 mr-2">Name: </p>
                        <input type="text" className="border-2 rounded-md p-1"/>
                    </div>

                    <div className="flex flex-col mb-1 ">
                        <p className="text-lg font-medium leading-6 text-gray-900 mr-2">Email: </p>
                        <input type="text" className="border-2 rounded-md p-1"/>
                    </div>
                    
                    <div className="flex flex-col mb-1">
                        <p className="text-lg font-medium leading-6 text-gray-900 mb-1 mr-2">Watch Model: </p>
                        <input type="text" className="border-2 rounded-md p-1"/>
                    </div>
                    
                    <p className="text-lg font-medium leading-6 text-gray-900 mb-1">Services Selected: </p>

                <div className="text-md text-gray-900 grid grid-cols-2 mb-1">
                    {
                        services.map((service)=>(
                            service.active ?
                            <p>{ service.title }: ${ service.price }</p> : null
                        ))
                    }
                    
                </div>

                <p className="font-bold mb-1 text-lg">Estimated total: ${total}</p>

                    <p className="text-lg font-medium leading-6 text-gray-900 mb-1">Additional Information: </p>

                </div>

                <div className="mt-4">
                <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-2"
                    onClick={closeModal}
                >
                    Send
                </button>
                <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                >
                    Cancel
                </button>
                </div>
            </Dialog.Panel>
            </Transition.Child>
        </div>
        </div>
    </Dialog>
    </Transition>
</>
)
}
