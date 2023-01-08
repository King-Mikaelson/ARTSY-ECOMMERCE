import Image from 'next/image';
import delivery from "../assets/delivery.png";
import deliverydesktop from "../assets/deliverydesktop.png";
import blue from "../assets/blue.png";
import purple from "../assets/purple.png";
import orange from "../assets/orange.png";
import ring from "../assets/ring.png";
import ring1 from "../assets/ring1.png";

function sucess() {
  return (
    <main className=" relative bg-[#FFFF] h-screen flex flex-col justify-center items-center overflow-hidden">
      <Image src={ring} alt="ring" width={200} height={200} className="w-[496.87px] h-[496.87px] absolute top-0 left-0 z-10 hidden md:block " />
      <Image src={ring1} alt="ring1" width={200} height={200} className="w-[623.49px] h-[623.49px] absolute top-0 left-0 z-10  hidden md:block"  />
      <div className=" flex flex-col justify-center items-center">
        <Image src={delivery} alt="delivery" width={200} height={200} className="w-[275px] h-[246px] md:hidden" />
        <Image src={deliverydesktop} alt="delivery" width={200} height={200} className="hidden md:block w-[454.18px] h-[405.52px]" />
        <div className='py-10  m-0 px-0 flex flex-col gap-3 md:gap-10'>
        <p className='text-[1.125rem] md:text-[2.535rem] text-center leading-[1.75rem] font-Satoshi font-medium text-[#000000]'>Hey Celestina, thank you for your purchase.</p>
        <p className='text-[1rem] md:text-[1.901rem] text-center leading-[1.75rem] font-Satoshi  text-[#000000]'>You are amazing. Cheers to being <span className="text-transparent bg-clip-text bg-gradient-to-r  from-[#006CA2] to-[#C05609]">ARTSY!</span></p>
        </div>
      </div>
      <Image src={blue} alt="blue" width={200} height={200} className="w-[100%] h-[40%]  absolute -top-20 right-0 left-0 md:hidden" />
      <Image src={purple} alt="purple" width={200} height={200} className="w-[100px] h-[150px] absolute -top-12 md:hidden" />
      <Image src={orange} alt="orange" width={200} height={200} className="w-[100%] h-[40%] absolute  -bottom-20 right-0 left-0 md:hidden" />

    </main>
  )
}

export default sucess
