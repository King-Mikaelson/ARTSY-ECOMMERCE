import React, { useState } from 'react'
import { Bars3Icon, BellIcon, XMarkIcon, SearchIcon, ShoppingCartIcon} from '@heroicons/react/24/outline'
import Message from "../../assets/Message.png";
import Image from "next/image";
import Link from 'next/link'


export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products")
  const data = await  res.json();

  return{
    props:{content : data}
  }
}


function NavBar() {

    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'Auctions', href: '/auctions', current: false },
        { name: 'Marketplace', href: '/marketplace', current: false },
        { name: 'Drops', href: '/drops', current: false },
      ]
      const[open, setOpen] = useState(false)
  return (
  <nav className='shadow-md w-full fixed top-0 left-0 z-10'>
    <div className='md:flex flex items-center  justify-between  bg-white py-4 px-4 md:px-10 md:mx-0  relative'>
    <Bars3Icon onClick={() => setOpen(prevValue => !prevValue)} className="md:hidden block h-6 w-6" aria-hidden="true" />
    <div  className='cursor-pointer flex justify-between items-center px-2'>
    <h3 className=' md:text-size text-2xl  md:leading-12  text-black font-bold'>ARTSY.</h3>
    </div>
    <ul className='hidden md:flex md:items-center md:justify-center md:static md:w-auto md:bg-white md:text-black  absolute top-0 right-0 text-white bg-black w-full'>
       {
        navigation.map((link) => (
            <li key={link.name} className="md:ml-8 text-2xl md:my-0 my-7">
                <a className=' hover:underline hover:underline-offset-8' href={link.href}>{link.name}</a>
            </li>
        ))
       }
    </ul>

    <div className={open ? 'md:hidden z-10 md:flex md:items-center md:static md:w-auto   absolute top-0 right-0 text-black bg-slate-50 w-full h-[90vh] transition-all duration-500 ease-in' :  "hidden"}>
   <div className='cursor-pointer flex justify-between items-center px-2'>
   <h3 className=' text-size leading-12 pl-0 pl-2   text-black font-bold'>ARTSY.</h3>
   <XMarkIcon  onClick={() => {setOpen(prevValue => !prevValue)}} className="block h-10 w-6" aria-hidden="true"/>
    </div>
    <ul className='flex flex-col gap-5 justify-center pl-0 pl-4'>
       {
        navigation.map((link) => (
            <li key={link.name} className="md:flex text-2xl md:my-0 my-7">
                <Link onClick={() => {setOpen(prevValue => !prevValue)}} className=' hover:underline hover:underline-offset-8' href={link.href}>{link.name}</Link>
            </li>
        ))
       }
    </ul>
    <div className='flex justify-end pr-5'>
    <Image src={Message} alt="message icon" />
    </div>
    </div>
    <div className="flex md:gap-5 gap-1 items-center ">
                <button
                  type="button"
                  className="rounded-full p-1  focus:outline-none"
                >
                  <span className="sr-only">View notifications</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" aria-hidden="true"  />
</svg>
                </button>

                {/* Profile dropdown */}
                <Link href="/payment">
                <button
                  type="button"
                >
                <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" aria-hidden="true"  />
</svg>
                </button>
                </Link> 


                <button
                  type="button"
                >
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" aria-hidden="true"  />
</svg>
                </button>

              </div>
    </div>
  </nav>
  )
}

export default NavBar
