import React,{useState,createContext } from 'react'
import A from './A'

export const MyContext=createContext();

function UseContextmain() {
  const [name,Setname]=useState("Rajesh")
  const [age,Setage]=useState("31")

  return (
    <MyContext.Provider value={{name,Setname,age,Setage}} >
        <h1>My name is : {name} </h1>
        <A/>
    </MyContext.Provider>
  )
}

export default UseContextmain