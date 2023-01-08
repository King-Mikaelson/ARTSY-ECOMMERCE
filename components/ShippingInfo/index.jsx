import React from "react";
import Link from "next/link";
import Image from 'next/image';
import {AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { XMarkIcon} from '@heroicons/react/24/outline';
import AppContext from '../Context/AppContext';
import {useState, useContext} from "react";
import { PaystackButton } from 'react-paystack';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useRouter } from "next/router";


function ShippingInfo() {

    const router = useRouter();

    const {
        state: { cart },
        dispatch,
        cartCount, 
        cartTotal,
        increaseCart,
        decreaseCart,
        remove
      } = useContext(AppContext);



      const publicKey = "pk_test_7cd7f5c60bfa7d3b2e6619991b514f7abfc63733"
      const amount = 1000000 // Remember, set in kobo!
      const [email, setEmail] = useState("")
      const [name, setName] = useState("")
      const [phone, setPhone] = useState("")
      const [wallet, setWallet] = useState("metamask")
    

      const componentProps = {
        email,
        amount,
        metadata: {
          name,
          phone,
        },
        publicKey,
        text: "Pay with PayStack",
        onSuccess: () => {
        alert("Thanks for doing business with us! Come back soon!!");
        router.push("/success")
        } ,
        
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
      }



      const config = {
        public_key: 'FLWPUBK_TEST-SANDBOXDEMOKEY-X',
        tx_ref: Date.now(),
        amount: cartTotal,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: email,
           phone_number: phone,
          name: name,
        },
        customizations: {
          title: 'my Payment Title',
          description: 'Payment for items in cart',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };
    
      const handleFlutterPayment = useFlutterwave(config);
    

  return (
    <div>
      <p className="md:hidden text-[1.2857rem] leading-[3.71rem] font-bold font-Satoshi border-b-4 border-solid border-[#BCB7B7] truncate md:truncate md:border-none md:pl-10">
        <span className="text-[#BCB7B7]">Home/ Marketplace/</span>Cart
      </p>
    
    <div className="flex justify-center items-center">
    <div className='md:flex gap-16  pt-16  border-b-2 border-solid border-[#BCB7B7] justify-center items-center hidden'>
    <Link href="/payment"><p className="text-[1.5rem] pb-2  leading-[2rem] font-medium font-Satoshi ">Shopping cart</p></Link>
    <Link href="/payment/shipping"><p className="text-[1.5rem] pb-2  leading-[2rem] font-medium font-Satoshi border-b-[3px] border-solid border-[#BCB7B7] ">Shipping details</p></Link>
    <Link  href="/payment/checkout"><p className="text-[1.5rem] pb-2  leading-[2rem] font-medium font-Satoshi">Payment details</p></Link>
    </div>
    </div>


      <div className="md:grid grid-cols-2 md:px-8">
        <div>
        <form className="flex flex-col">
    <div className="flex flex-col gap-4">

    <div className="flex flex-col gap-2 py-2 pt-10">
    <label className="text-[1.125rem] font-Satoshi text-[#888888]" for="email">Your email</label>
    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" className="py-4 px-2 bg-[#F2F2F2] border-[0.5px] rounded-[10px] border-solid border-[#747474]" id="email" name="email"/> 
    </div>

    <div className="md:flex flex-col gap-2 py-2 pt-6 hidden">
    <label className="text-[1.125rem] font-Satoshi text-[#888888]" for="email">Your full name</label>
    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="py-4 px-2 bg-[#F2F2F2] border-[0.5px] rounded-[10px] border-solid border-[#747474]" id="email" name="email"/> 
    </div>

    <div className="flex flex-col gap-2 md:py-2 md:pt-6">
    <label  className="text-[1.125rem] font-Satoshi text-[#888888]" for="wallet">Choose a Wallet</label>
    <select onChange={(e) => setWallet(e.target.value)}  className="py-4 px-2 bg-[#F2F2F2] border-[0.5px] rounded-[10px] border-solid border-[#747474]" id="wallet" name="wallet">
      <option value="coinbase">CoinBase</option>
      <option value="metamask">MetaMask</option>
      <option value="paystack">PayStack</option>
      <option value="flutterwave">Flutterwave</option>
    </select>    
    </div>


<div className="flex flex-col gap-2 md:py-2 md:pt-6">
<label  className="text-[1.125rem] font-Satoshi text-[#888888]" for="city">City</label>
    <select  className="py-4 px-2 bg-[#F2F2F2] border-[0.5px] rounded-[10px] border-solid border-[#747474]" id="city" name="city">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
</div>

<div className="w-full md:gap-6 flex md:flex-row flex-col gap-4 md:py-2 md:pt-6">
<div className="flex flex-col gap-2 md:w-[50%]">
<label  className="text-[1.125rem] font-Satoshi text-[#888888]" for="country">Country</label>
    <select  className="py-4 px-2 bg-[#F2F2F2] border-[0.5px] rounded-[10px] border-solid border-[#747474]" id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
</div>

<div className="flex flex-col gap-2 md:w-[50%]">
<label  className="text-[1.125rem] font-Satoshi text-[#888888]" for="postal">Postal Code</label>
<input  className="py-4 px-2 bg-[#F2F2F2] border-[0.5px] rounded-[10px] border-solid border-[#747474]" type="text" id="postal" name="postal"/>
</div>

</div>



<div className="flex flex-col gap-2 md:py-2 md:pt-6">
<label  className="text-[1.125rem] font-Satoshi text-[#888888]" for="number">Phone Number</label>
<input onChange={(e) => setPhone(e.target.value)} value={phone}  className="py-4 px-2 bg-[#F2F2F2] border-[0.5px] rounded-[10px] border-solid border-[#747474]" type="text" id="number" name="number"/>

</div>


    </div>
    <div className="px-4 my-10 md:flex md:justify-between md:mx-6 ">
        <div className="flex flex-col justify-center my-5 items-center">
          {wallet === "metamask" || wallet === "coinbase" ? (
            <Link href="/payment/checkout">
            <button className="md:mt-16 bg-[#3341C1] px-4 py-5 md:px-10 md:py-7 font-Satoshi text-[1.09rem] md:text-[2rem] font-medium leading-[1.5rem] text-[#FFFFFF] rounded-[4px]">
              Proceed to Payment
            </button>
          </Link>
            ) : ""}
          <Link href="/payment">
            <p className="md:hidden font-Satoshi text-center text-[1.125rem] md:text-[1.75rem]  leading-[1.5rem] text-[#006CA2] mt-6 underline">
              Go Back To Cart
            </p>
          </Link>
        </div>
      </div>
  </form>
  {wallet === "paystack" && (
      <PaystackButton className="paystack-button" {...componentProps} />
    )
}

{wallet === "flutterwave" && (
   <button
   onClick={() => {
    if(name == "" || phone == "" ||email == "") {alert("Please fill in all fields")}
    else{
      handleFlutterPayment({
        callback: (response) => {
           console.log(response);
            closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {},
      });
    }
   }}
   className="paystack-button"
 >
   Pay with Flutterwave
 </button>
)
}
        </div>


<div className="hidden md:flex flex-col">


<div className='flex flex-col mx-3 mt-24 gap-14 md:gap-0  justify-center md:justify-between h-[51rem] overflow-y-scroll '>
    {cart.map((item, index) => (
           <div key={index} className='flex gap-2  justify-between md:py-12 md:mx-14 md:border-t-2 md:border-solid md:border-[#747474]'>
           <div className='flex md:gap-10'>
           <Image src={item.image} width={125} height={126} alt="cart image" className='w-[125px] h-[126px] md:w-[210px] md:h-[196px]'/>
          
           {/* Desktop Styling */}
           <div className='hidden md:flex flex-col justify-between gap-7'>
           <p className='font-Satoshi text-[1.5rem] leading-[1.5rem] font-medium text-[#292929]'>{item.category}</p>
           <p className='font-Satoshi text-[1.5rem] leading-[1.5rem] overflow-clip text-ellipsis   text-[#888888]'>{item.title}</p>
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
           <p className='font-Satoshi font-bold text-[1.375rem] leading-[1.875rem] text-[#333333] py-3 md:hidden'>Philomena</p>
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




<div className=' flex py-8 flex-col gap-5 md:gap-12  border-b-2 border-solid border-[#888888] md:border-none'>

<div className='flex justify-between gap-2 '>
    <p  className='font-Satoshi text-[1.25rem] md:text-[1.75rem] leading-[1.29rem] text-[#888888] md:border-none'>Products in cart : </p>
    <p className='font-Satoshi text-[1.25rem] md:text-[1.75rem]  font-medium leading-[1.29rem] text-[#292929]'>{cartCount}</p>
</div>

<div className='flex justify-between  gap-2 '>
    <p className='font-Satoshi text-[1.25rem] md:text-[1.75rem]  leading-[1.29rem] text-[#888888] md:border-none'>Shipping :  </p>
    <p className='font-Satoshi text-[1.25rem] md:text-[1.75rem]  font-medium leading-[1.29rem] text-[#292929]'>Free</p>
</div>

<div className='flex justify-between  gap-2'>
    <p className='font-Satoshi text-[1.25rem] md:text-[1.75rem]  leading-[1.29rem] text-[#888888] md:border-none'>Total :  </p>
    <p className='font-Satoshi text-[1.25rem] md:text-[1.75rem]  font-medium leading-[1.29rem] text-[#292929]'>${cartTotal}</p>
</div>
</div>
</div>

 
      </div>

      
    </div>
  );
}

export default ShippingInfo;
