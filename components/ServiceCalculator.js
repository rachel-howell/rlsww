import React, { useState } from 'react'

const ServiceCalculator = () => {

  const [ total, setTotal ] = useState(0);

  const [ services, setServices ] = useState([
    { title: "Bezel Swap", price: "65", description: "Includes swapping of insert upon request.", active: false},
    { title: "Bezel Insert Swap", price: "65", description: "Additional $5 if adhesive ring is not provided.", active: false},
    { title: "Crystal Swap", price: "65", description: "Additional $10 if new gasket is needed and not provided. Includes chapter ring swapping if requested.", active: false},
    { title: "Chapter Ring Swap", price: "65", description: "Additional $10 if new crystal gasket is needed and not provided, included at no charge if requested during a crystal swap.", active: false},
    { title: "Caseback Swap", price: "20", description: "Includes new caseback gasket.", active: false},
    { title: "Handset and/or Dial Swap", price: "65", description: "Additional $20 if day and/or date wheel swap is requested. Additional fee of $10 if dial adhesive is needed.", active: false},
    { title: "Second Hand Only Swap", price: "20", description: "", active: false},
    { title: "Day and/or Date Wheel Swap", price: "85", description: "Includes labor for handset and/or dial swapping if requested.", active: false},
    { title: "Movement Swap", price: "160", description: "Additional $20 if the correct day wheel is not provided, includes swapping of dial holder/movement spacer ring, day and/or day wheel, dial, handset, crown, and cutting and fitting of stem.", active: false},
    { title: "Custom Fit Crown Swap", price: "50", description: "Includes cutting and fitting of stem.", active: false},
    { title: "Wet Pressure Testing", price: "40", description: "", active: false},
    { title: "Movement Regulation for Improved Accuracy", price: "40", description: "", active: false},
    { title: "Full Build Assembly using Client-Provided Parts and Gaskets", price: "225", description: "Includes movement regulation and pressure testing if requested.", active: false}
  ])

  const serviceHandler = (serviceItem, id) => {
    let items = services;
    let item = serviceItem;
    if(item.active){
      setTotal(total-Number(item.price))
    } else if (!item.active){
      setTotal(total+Number(item.price))
    }
    item.active = !item.active;
    console.log(item.active)
    items[id] = item;
    setServices(items);
  }
  

  return (
    <div className="flex flex-row max-w-5xl border-4">
      <div>
      {
        services.map((service, id)=>(
            <div className={service.active ? "border-2 rounded-md p-3 w-3/5 mx-auto mb-2 bg-gray-100 hover:bg-white" : "border-2 rounded-md p-3 w-3/5 mx-auto mb-2 hover:bg-gray-100"} onClick={()=>serviceHandler(service, id)}>
                <h1 className="text-2xl">{service.title}: ${service.price}</h1>
                <p>{service.description}</p>
            </div>
        ))
      }
      </div>
        
      <div > 
        <p className="border-2 rounded-md p-5 w-3/5 h-fit mx-auto text-2xl fixed">Estimated Total: ${total}</p>
      </div>
  </div>
  )
}

export default ServiceCalculator
