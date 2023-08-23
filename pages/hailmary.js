import React from 'react'

const hailmary = () => {
  let array = [1,2,3,3,4,5,6,6,6,9];
  let arrayOfObjs = [];

  let obj = {};

  // obj[array[0]] = 1;
  // obj[array[1]] = 1;
  // obj[array[2]] = 1;
  // obj[array[3]] = obj[array[3]]+1;

  // console.log(obj[array[3]])
  for(let x=0; x<array.length; x++){
    if(obj[array[x]]){
      obj[array[x]] = obj[array[x]]+1;
    } else {
      obj[array[x]]=1;
    }
  }



  for(let k in obj){
    let newItem={
      "quantity":obj[k],
      "merchandiseId":k
    }
    arrayOfObjs.push(newItem)
  }


  console.log(arrayOfObjs)
  return (
    <div>hailmary</div>
  )
}

export default hailmary
