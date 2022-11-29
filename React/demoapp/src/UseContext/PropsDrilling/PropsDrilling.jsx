import React,{useState} from 'react'
import A from './A'

function PropsDrilling() {
  const [name,Setname]=useState("Rajesh")

  return (
    <div class="m-5">
        <h1>p arent : My name is : {name} </h1>
        <A name={name}/>
        <button onClick={()=>Setname('Mahesh')}>change State </button>
    </div>
  )
}

export default PropsDrilling