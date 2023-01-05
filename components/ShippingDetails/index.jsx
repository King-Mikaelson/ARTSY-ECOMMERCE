import React from 'react'
import Image1 from "../../assets/Rectangle39.png";
import Image2 from "../../assets/Rectangle284.png"
import Image from 'next/image';
import {AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { XMarkIcon} from '@heroicons/react/24/outline';
import Link from 'next/link'
import AppContext from '../Context/AppContext';
import {useState, useContext} from "react";
import { useRouter } from 'next/router'






function ShippingDetails() {
    const [button, setButton] = useState("shop");
    const router = useRouter()
    const {
        state: { cart},
        cartCount, 
        cartTotal,
        increaseCart,
        decreaseCart,
        remove
      } = useContext(AppContext);


  return (
    <div>
    <p className="md:hidden text-[1.2857rem] leading-[3.71rem] font-bold font-Satoshi border-b-4 border-solid border-[#BCB7B7] truncate md:truncate md:border-none md:pl-10"><span className="text-[#BCB7B7]">Home/ Marketplace/</span>Cart</p>
    <div className='flex flex-col justify-center items-center'>
    <div className='md:flex gap-16 mx-0 my-auto pt-16 w-fit border-b-2 border-solid border-[#BCB7B7] justify-center items-center hidden'>
    <Link href="/payment"><p className="text-[1.5rem] pb-2  leading-[2rem] font-medium font-Satoshi border-b-[3px] border-solid border-[#BCB7B7]">Shopping cart</p></Link>
    <Link href="/payment/shipping"><p className="text-[1.5rem] pb-2  leading-[2rem] font-medium font-Satoshi ">Shipping details</p></Link>
    <Link  href="/payment/checkout"><p className="text-[1.5rem] pb-2  leading-[2rem] font-medium font-Satoshi">Payment details</p></Link>
    </div>
      <div className='md:hidden bg-[#3A3A3A] rounded-[40px] px-4  py-2 mx-6 my-auto flex justify-center mt-12'>
        <button onClick={() => setButton("shop")} className={button === "shop" ?"bg-[#FFFFFF] text-[#000000] text-[1.125rem] leading-[2.4rem] font-Satoshi px-8 py-2 rounded-[27px] font-medium" : "text-[#FFFFFF] text-[1.125rem] leading-[2.4rem] font-Satoshi px-8 py-2 font-medium"}>
            Shop 
        </button>
        <button onClick={() => setButton("scheduled")}   className={button === "scheduled" ?"bg-[#FFFFFF] text-[#000000] text-[1.125rem] leading-[2.4rem] font-Satoshi px-8 py-2 rounded-[27px] font-medium":"text-[#FFFFFF] text-[1.125rem] leading-[2.4rem] font-Satoshi px-8 py-2 font-medium"}>
        Scheduled
        </button>
      </div>
    </div>
    
    <div className='flex flex-col mx-3 pt-64 md:pt-px mt-24 gap-14 md:gap-0  justify-center md:justify-between h-[51rem] overflow-y-scroll '>
    {cart.map((item, index) => (
            <div key={index}className='flex gap-2  justify-between md:py-12 md:mx-14 md:border-t-2 md:border-solid md:border-[#747474]'>
            <div className='flex md:gap-10'>
            <Image src={item.image} width={125} height={126} alt="cart image" className='w-[125px] h-[126px] md:w-[210px] md:h-[196px]'/>
           
            {/* Desktop Styling */}
            <div className='hidden md:flex flex-col justify-between gap-7'>
            <p className='font-Satoshi text-[1.5rem] leading-[1.5rem] font-medium text-[#292929]'>{item.category}</p>
            <p className='font-Satoshi text-[1.5rem] leading-[1.5rem]  text-[#888888]'>{item.title}</p>
            <p className='font-Satoshi font-bold text-[1.25rem] leading-[2rem] text-[#888888]'>Size : <span className='text-[#292929]'>200 ft</span></p>
    
            <div className="flex items-center px-2 ">
            <button onClick={() => decreaseCart(item)}><AiOutlineMinus size={20} color={"#333333"} /></button>
            <p className="font-medium text-[1.3rem] md:text-[2rem] text-[#333333] font-Satoshi  px-4">{item.qty}</p>
            <button onClick={() => increaseCart(item)}><AiOutlinePlus size={20} color={"#333333"} /></button>
            </div>
            </div>
            </div>
            <div className='md:flex md:flex-col md:justify-between'>
            <div className='flex items-center justify-between gap-2 -mt-4 md:hidden'>
            <p className='font-Satoshi text-[1rem] leading-[1.375rem] itlic text-[#333333]'>{item.category}</p>
            <button onClick={() => remove(item)}><XMarkIcon className="rounded-[999px] py-2  h-12 w-12 border border-solid border-[#888888]" aria-hidden="true"/></button>
            </div>
            <p className='font-Satoshi font-bold text-[1.375rem] leading-[1.875rem] text-[#333333] overflow-clip text-ellipsis py-3 md:hidden'>{item.title}</p>
            <div className='flex gap-4 md:hidden'>
            <div className="flex items-center border border-solid border-[#888888] rounded-[8px] px-2 ">
            <button onClick={() => decreaseCart(item)}><AiOutlineMinus size={20} color={"#333333"} className="mr-3"/></button>
            <p className="font-medium text-[1.3rem] md:text-[2rem] text-[#333333] font-Satoshi border-r-2 border-l-2 border-solid border-[#888888] px-4">{item.qty}</p>
            <button onClick={() =>increaseCart(item)}><AiOutlinePlus size={20} color={"#333333"} className="ml-3"/></button>
            </div>
            <p className='font-Satoshi font-bold text-[1.5rem] leading-[2rem] text-[#333333]'>${item.price}</p>
            </div>
            {/* Styling For Desktop */}
            <div className='hidden md:flex flex-col justify-between gap-32 items-center '>
            <button onClick={() => remove(item)}><XMarkIcon className="rounded-[999px] py-2  h-12 w-12 border border-solid border-[#888888]" aria-hidden="true"/></button>
            <p className='font-Satoshi font-bold text-[1.5rem] leading-[2rem] text-[#333333] justify-self-end'>${item.price}</p>
            </div>
            </div>
        </div>
    ))}




    </div>

    <div className='px-4  md:flex md:justify-between md:mx-6 '>
        <div className='order-2 flex py-8 flex-col gap-6 md:gap-12 border-b-2 border-solid border-[#888888] md:border-none'>

        <div className='flex justify-between md:gap-64'>
            <p  className='font-Satoshi text-[1.25rem] md:text-[1.75rem] leading-[1.29rem] text-[#888888] md:border-none'>Products in cart : </p>
            <p className='font-Satoshi text-[1.25rem] md:text-[1.75rem]  font-medium leading-[1.29rem] text-[#292929]'>{cartCount}</p>
        </div>

        <div className='flex justify-between md:gap-64 '>
            <p className='font-Satoshi text-[1.25rem] md:text-[1.75rem]  leading-[1.29rem] text-[#888888] md:border-none'>Shipping :  </p>
            <p className='font-Satoshi text-[1.25rem] md:text-[1.75rem]  font-medium leading-[1.29rem] text-[#292929]'>Free</p>
        </div>

        <div className='flex justify-between md:gap-64'>
            <p className='font-Satoshi text-[1.25rem] md:text-[1.75rem]  leading-[1.29rem] text-[#888888] md:border-none'>Total :  </p>
            <p className='font-Satoshi text-[1.25rem] md:text-[1.75rem]  font-medium leading-[1.29rem] text-[#292929]'>${cartTotal}</p>
        </div>
        </div>


        <div className='flex flex-col py-5 order-1'>
            
        <div className='flex justify-between md:hidden'>
            <p className='font-Satoshi text-[1.25rem] leading-[1.29rem] text-[#888888]'>Grand Total :  </p>
            <p className='font-Satoshi text-[1.25rem] font-medium leading-[1.29rem] text-[#292929]'>${cartTotal}</p>
        </div>

        <div className='flex flex-col justify-center my-5 items-center'>
        <Link href="/payment/shipping"><button className='bg-[#3341C1] px-4 py-5 md:px-10 md:py-7 font-Satoshi text-[1.09rem] md:text-[2rem] font-medium leading-[1.5rem] text-[#FFFFFF] rounded-[4px]'>Proceed to checkout</button></Link>
        <p onClick={() => router.push('/marketplace')} className='font-Satoshi text-center text-[1.125rem] md:text-[1.75rem]    leading-[1.5rem] text-[#006CA2] mt-6 underline'>Continue shopping</p>
        </div>
        </div>
 
    </div>

    </div>
  )
}

export default ShippingDetails