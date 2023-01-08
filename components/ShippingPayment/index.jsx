import Link from "next/link";
import {BiLock} from "react-icons/bi";
import Img1 from "../../assets/MetaMask.png";
// import Img2 from "../../assets/CoinBase.png";
import Img3 from "../../assets/Phantom.png";
import Img4 from "../../assets/WalletConnect.png";
import Img5 from "../../assets/PaystackLogo.png";
import Img6 from "../../assets/FlutterWaveLogo.png"
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import AppContext from '../Context/AppContext';
import { ethers } from "ethers";
import {useState, useContext, useEffect} from "react";
import { useRouter } from 'next/router'




function ShippingPayment() {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [wallet, setWallet] = useState("");
  const [key, setKey] = useState("");
  const [expiry, setExpiry] = useState("");

  console.log(selectedAddress)

  const router = useRouter()

useEffect(() => {
const  connectToMetamask = () => {
  if (window.ethereum) {
    window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(accounts => {
        console.log(accounts[0]);
        setSelectedAddress(accounts[0])
      })
      .catch(err => console.log(err));
  } else {
    alert('Please install MetaMask!');
  }
  

}

const successCallback = (position) => {
  console.log(position);
};

const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

connectToMetamask()
successCallback()
}, [])



const  connectToMetamask = () => {
  if (window.ethereum) {
    window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(accounts => {
        console.log(accounts[0]);
        setSelectedAddress(accounts[0])
      })
      .catch(err => console.log(err));
  } else {
    alert('Please install MetaMask!');
  }

}


    const {
        cartCount, 
        cartTotal,
      } = useContext(AppContext);

      const matic = 0.00005205
  // const [amount, setAmount] = useState(cartTotal * matic);
      const amount = cartTotal * matic;
	const [destinationAddress, setDestinationAddress] = useState("0x3136D6e327018d4124C222E15f4aD7fA8621f16E"); 
  const [error, setError] = useState("");
  const[transactionResponse, setTransactionResponse] = useState(null);
  console.log({amount, destinationAddress});
  console.log(ethers.utils.parseEther(amount.toString())) 


	const  startPayment = async () => { 
    if(wallet && key && expiry){

      setError("");
    setTransactionResponse(null);
    try {

      if (!window.ethereum) {
        throw  new  Error("No crypto wallet found. Please install it.");
      }
    
        await  window.ethereum.send("eth_requestAccounts");
    
        const  provider = new  ethers.providers.Web3Provider(window.ethereum);
    
        const  signer = provider.getSigner();
    
        ethers.utils.getAddress(destinationAddress);
    
        const  transactionResponse = await  signer.sendTransaction({
    
          to:  destinationAddress,
    
          value:  ethers.utils.parseEther(amount.toString())
    
        });
    
        console.log({transactionResponse});
        if(transactionResponse){
          alert("Payment Successful")
          router.push('/success')
        }
        setTransactionResponse(transactionResponse);
    
      } catch (error) {
    
        console.log({error});
        alert("Transaction Failed - Please check your wallet and try again")
        setError(error.message);
      }
    
    }else{
      alert("Please fill in all fields")
    }
    
    }

  return (
    <div>
     <p className="md:hidden text-[1.2857rem] leading-[3.71rem] font-bold font-Satoshi border-b-4 border-solid border-[#BCB7B7] truncate md:truncate md:border-none md:pl-10">
    <span className="text-[#BCB7B7]">Home/ Marketplace/Cart/Shipping/</span>Payment
      </p>

      <div className="flex justify-center items-center">
    <div className='md:flex gap-16  pt-16  border-b-2 border-solid border-[#BCB7B7] justify-center items-center hidden'>
    <Link href="/payment"><p className="text-[1.5rem] pb-2  leading-[2rem] font-medium font-Satoshi ">Shopping cart</p></Link>
    <Link href="/payment/shipping"><p className="text-[1.5rem] pb-2  leading-[2rem] font-medium font-Satoshi ">Shipping details</p></Link>
    <Link  href="/payment/checkout"><p className="text-[1.5rem] pb-2  leading-[2rem] font-medium font-Satoshi border-b-[3px] border-solid border-[#BCB7B7] ">Payment details</p></Link>
    </div>
    </div>


<div className="flex gap-2 py-2 pt-4 justify-between md:px-8">
<p className="hidden md:block text-[#292929] font-Satoshi font-medium text-[1.75rem]">Payment method</p>
<div className="flex gap-2 items-center">
<BiLock size={20}/>
<p className="text-[#747474] font-Satoshi text-[1rem] md:text-[1.5rem]">Secure server</p>
</div>
</div>

   
    <div className="md:grid grid-cols-2 md:px-8">
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col ">
    <div className="flex flex-col gap-4 md:border md:border-solid md:border-[#FFFFF] md:shadow-[0px_0px_5px_rgba(0,0,0,0.25)] md:px-8 rounded-lg">

<div className="md:flex justify-between pt-8">
<div className="flex items-center gap-2 md:py-2 md:pt-6 py-1 pl-6 md:pl-0">
<input type="checkbox" className=" px-2 bg-[#F2F2F2] border-[0.5px] rounded-[10px] border-solid border-[#747474]"  name="checkbox "/>
<p className="text-[#292929] text-[1.25rem] font-Satoshi font-medium md:text-[1.75rem] ">Select your wallet</p>
</div>

<div className="md:flex  md:flex-col lg:flex-row items-center justify-start py-2 hidden">
    <Image className="cursor-pointer"  onClick={() => connectToMetamask()} src={Img1} alt="MetaMask" width={50} height={50}/>
    {/* <Image src={Img2} alt="CoinBase" width={50} height={50}/> */}
    <Image src={Img3} alt="Phantom" width={50} height={50}/>
    <Image src={Img4} alt="WalletConnect" width={50} height={50}/>
    <Image src={Img5} className="rounded-full"  alt="WalletConnect" width={50} height={50}/>
    {/* <Image src={Img6} className="rounded-full" alt="WalletConnect" width={40} height={40}/> */}
    
    </div>

</div>    


<p className="text-[#747474] font-Satoshi text-[1rem] md:text-[1.5rem] lg:w-[35ch]">Connect with one of our available wallet providers or add and connect a new wallet.</p>

    <div className="flex items-center justify-center md:justify-start py-2 md:hidden">
    <Image className="cursor-pointer"  onClick={() => connectToMetamask()} src={Img1} alt="MetaMask" width={50} height={50}/>
    {/* <Image src={Img2} alt="CoinBase" width={50} height={50}/> */}
    <Image src={Img3} alt="Phantom" width={50} height={50}/>
    <Image src={Img4} alt="WalletConnect" width={50} height={50}/>
    <AiOutlinePlus size={40} className="text-[#BCB7B7] border border-solid border-[#BCB7B7] rounded-full"/>
    </div>
    <div className="flex flex-col gap-2 md:py-2 md:pt-6">
    <label className="text-[1.125rem] font-Satoshi text-[#888888]" for="wallet">Wallet type</label>
    <div className="w-full relative">
    <input onChange={(e) => setWallet(e.target.value) } value={wallet}  required type="text" className="w-full py-4 px-2 bg-[#F2F2F2] border-[0.5px] rounded-[10px] border-solid border-[#747474]" id="email" name="email"/> 
    <Image className="cursor-pointer absolute right-0 top-0" src={Img1} alt="MetaMask" width={50} height={50}/>
    </div>
    </div>

    <div className="flex flex-col gap-2 md:py-2 md:pt-6">
    <label className="text-[1.125rem] font-Satoshi text-[#888888]" for="key">Key</label>
    <input onChange={(e) => setKey(e.target.value) } value={key}  required type="text" className="py-4 px-2 bg-[#F2F2F2] border-[0.5px] rounded-[10px] border-solid border-[#747474]" id="key" name="key" placeholder="Please enter your key"/> 
    </div>









<div className="w-full md:gap-6 flex md:flex-row flex-col gap-4 md:py-2 md:pt-6">
<div className="flex flex-col gap-2 md:py-2 md:pt-6 md:w-[50%]">
<label className="text-[1.125rem] font-Satoshi text-[#888888]" for="expiry">Expiry Date</label>
<input onChange={(e) => setExpiry(e.target.value) } value={expiry} required type="text" className="py-4 px-2 bg-[#F2F2F2] border-[0.5px] rounded-[10px] border-solid border-[#747474]" id="email" name="email"/> 
</div>

<div className="flex flex-col gap-2 md:py-2 md:pt-6  md:w-[50%] md:hidden">
<label  className="text-[1.125rem] font-Satoshi text-[#888888]" for="number">Safe Code</label>
<input required   className="py-4 px-2 bg-[#F2F2F2] border-[0.5px] rounded-[10px] border-solid border-[#747474]" type="text" id="code" name="code "/>
</div>

<div className="md:flex flex-col gap-2 md:py-2 md:pt-6  md:w-[50%] hidden">
<label  className="text-[1.125rem] font-Satoshi text-[#888888]" for="number">CVV</label>
<input  className="py-4 px-2 bg-[#F2F2F2] border-[0.5px] rounded-[10px] border-solid border-[#747474]" type="text" id="code" name="code "/>
</div>

</div>


<div className="flex items-center gap-2 md:py-16">
<input type="checkbox" className="py-4 px-2 bg-[#F2F2F2] border-[0.5px] rounded-[10px] border-solid border-[#747474]"  name="checkbox "/>
<p className="font-Satoshi md:text-[1.25rem] text-[#747474] ">Save my wallet details & information for future transactions</p>
</div>


    </div>
    <div onClick={() => {connectToMetamask();  startPayment()}} className="px-4 my-10 md:flex md:mx-6 md:justify-center  ">
        <div  className="flex flex-col justify-center my-5 items-center">
            <button className="bg-[#3341C1] px-12 py-5 md:px-36 md:py-7 font-Satoshi text-[1.09rem] md:text-[2rem] font-medium leading-[1.5rem] text-[#FFFFFF] rounded-[4px]">
              Confirm
            </button>
        </div>
      </div>
  
  </form>

<div className="hidden md:flex flex-col px-6">


<div className=' flex py-8 flex-col gap-12  border-b-2 border-solid border-[#888888] md:border-none'>

<div>
    <p className="text-[#292929] font-Satoshi font-medium text-[1.75rem] mb-10">Payment Summary</p>
    <div className="border-y-[1px] border-solid border-[#616161] py-7 flex flex-col gap-5">
    <p className="text-[#292929] font-Satoshi  text-[1.625rem]">Metamask wallet : {selectedAddress ? selectedAddress : "Connect Your Wallet To MetaMask"}</p>
    <p  className="text-[#616161] font-Satoshi text-[1.5rem]">Actively linked to Trans Ekulu, Enugu Nigeria.</p>
    </div>
    <p className="text-[#292929] font-Satoshi text-[1.5rem] mt-10">Expected arrival date: Between 22nd September and 26th September 2022</p>
</div>

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


{error &&

<div  role="alert">
<p  className="text-xl font-bold font-Satoshi">MetaMask Transaction Error</p>
<p  className="bg-red-700" >{JSON.stringify(error)}
</p>
</div>

}
</div>

 
      </div>
    </div>
  )
}

export default ShippingPayment
