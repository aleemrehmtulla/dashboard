import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import {BsGithub, BsFillMoonStarsFill} from 'react-icons/bs'

export default function Home() {

  const [dark, setDark] = useState(false);


  // enables dark mode (keeps value on refresh)
  function darkFunction(){
    if(typeof window !== 'undefined'){
      if(localStorage.getItem('dark') !== "dark on"){
        localStorage.setItem('dark', "dark on");
        setDark(true)
      } else {
        localStorage.setItem('dark', false);
        setDark(false)
      }
    }
}

    // onload, set dark mode and call the api
    useEffect(() => {
      if(typeof window !== 'undefined'){
        if(localStorage.getItem('dark') === "dark on"){setDark(true)}
        else {setDark(false)}
      }

   
    }, [])
  return (
    <div className={`${dark ? 'h-screen  bg-gray-900 w-screen ' : 'h-screen  bg-gray-200 w-screen '} `} >
    <Head>
      <title>Chai Bot </title>
      <meta name="description" content="Make some chai at the ease of a button" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <div className="flex px-7 md:px-20 pt-12 md:pt-12 justify-end h-fit">
      <button className='hover:cursor-pointer pr-6'> 
        <a target="_blank" rel="noreferrer" href='https://github.com/aleemrehmtulla/'>
          <BsGithub size={40} className={`${dark ? 'fill-white' : 'fill-black'}`}/>
        </a> 
      </button> 
      <button className='hover:cursor-pointer' onClick={darkFunction} >
        <BsFillMoonStarsFill size={40} className={`${dark ? 'fill-white' : 'fill-black'}`} />
      </button>
    </div>

    <div className='pt-20 md:pt-24'>

      <div className=" text-center">
        <h1 className={`${dark ? 'text-gray-300' : 'text-black'} text-4xl md:text-6xl  font-bold `} >chai maker ☕️</h1>
        {/* <p className={`${dark ? 'text-gray-300' : 'text-black'} font-semibold  text-xl md:text-3xl pt-2 `}>ETH Price $3 USD</p> */}
      </div>
      
      <div className="grid place-content-center mt-8 mr-3 ml-3 ">
       
       <button className={`${dark ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' : "bg-black hover:bg-gray-700 py-4 px-8 rounded text-white"}`}>
         hu
         
         </button>



       
      </div>

    </div>

  </div>
  )
}
