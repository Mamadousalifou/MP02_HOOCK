import React, { useEffect, useState } from 'react'


function Counts() {
    const [count,setCount] =useState(0)
    const [animal,setAnimal] = useState('RAS')
   
    useEffect(()=> {
        console.log("Je suis useEffect")
    document.title = `cliked  :  ${count}`
    
},[count,animal])
  return (
    <>
     <h1>counts: {count}</h1>
     <h1>animal : {animal}</h1>

    <input type='button' value="+1"   onClick={() => setCount(count +1)}/>
    <input type='button' value="-1"   onClick={() => setCount(count -1)}/>
    <input type='text' value={animal}   onChange={e => setAnimal(e.target.value)}/>
    
    
    </>
   
  )
}

export default Counts