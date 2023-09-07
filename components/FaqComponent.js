import React from 'react';
import { Disclosure } from '@headlessui/react';

const FaqComponent = () => {
    const faqContents = [
    {question:"Do I need a watch to modify?", answer:"Nope! We can work together to build a ground-up custom piece, or we can select an off-the-shelf watch and customize it to your liking."},
    {question:"Can you modify an existing watch?", answer:"Sure! If you have an existing watch you want modified, reach out and we can discuss options."},
    {question:"What is the best way to contact you and get started?", answer:"Please reach out via Direct Message on Instagram."},
    {question:"Can I ship parts to you?", answer:"Absolutely! You can dropship parts directly to me."},
    {question:"Will my watch be waterproof after work has been done?", answer:"No watch is truly waterproof, but rather water resistant. All watches I modify or otherwise build are pressure tested to ensure water resistance. That being said, it is the end user’s responsibility to ensure proper precautions are taken prior to water exposure, such as fully tightening the crown and never submerging the watch in warm water (such as in a jacuzzi)."},
    {question:"How long with it take?", answer:"Lead time varies based on my waitlist, required parts, and other factors such as shipping speed. In general, this varies from 7 days for builds from in-stock parts or up to 6 weeks for builds requiring more obscure parts, accounting for shipping delays. I always provide as accurate a lead time estimate as possible and will keep you in the loop throughout the process."},
    {question:"Do you accept returns?", answer:"No, I do not accept returns on any custom builds or modification services performed."},
    {question:"How do I pay for your services?", answer:"I accept Zelle, Cashapp, Venmo, and Paypal for modification services."},
    {question:"Do you require a deposit?", answer:"If you are commissioning a ground-up build or parts are required for your build that I do not stock, I do require a deposit with the remainder being due prior to shipment. If you want an existing watch modified, your base watch can act as a deposit."}
  ]
  return (
    <div className="w-full px-4 mt-6">
      <div className="mx-auto w-full max-w-xl rounded-2xl p-2 flex flex-col items-center text-6xl py-5">
        <p className="mb-5">FAQ</p>
        {/* {
          faqContents.map((faq, id)=>(
            <Disclosure key={id}>
              <Disclosure.Button key={`${id}+${faq.question}`} className="flex w-full justify-between rounded-lg px-4 py-4 text-left text-xl font-medium text-gray-900 hover:bg-[#dedcdc] focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                {faq.question}
              </Disclosure.Button>
              <Disclosure.Panel key={`${id}+${faq.answer}`} className="px-4 pt-4 pb-2 text-lg text-gray-700">
                {faq.answer}
              </Disclosure.Panel>
            </Disclosure>
          ))
        } */}

      
    </div>
    </div>
  )
}

export default FaqComponent
