import background from "../../public/Rectangle 236.png";
import backgroundDesktop from "../../public/Rectangle 299.png";
import background1 from "../../public/Rectangle 230.png";
import backgroundDesktop1 from "../../public/Rectangle 299 (1).png";
import background2 from "../../public/Rectangle 230 (1).png"
import backgroundDesktop2 from "../../public/Rectangle 299 (2).png"
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import {MdCircle} from "react-icons/md";
import thumbpic from "../../public/Ellipse 18.png";
import thumbpic1 from "../../public/Ellipse 17.png";
import thumbpic2 from "../../public/Ellipse 16.png";
import thumbpic3 from "../../public/Ellipse 15.png";
import thumbpic4 from "../../public/Ellipse 14.png";
import Arrow from "../../public/Arrow.png";
import Loader from "../../public/Loader.png";
import { useRouter } from "next/router";



function FeaturedProducts() {
  const router = useRouter();

  return (
    <main className=" mt-0 mb-0">
      <h3 className="text-[#292929] mx-4 font-Satoshi md:font-medium font-bold text-[2rem] leading-[3.143rem] md:mx-24 md:text-[3.429rem] md:leading-[4.64rem]">
        Featured products
      </h3>
      <div className="mt-5 ">
        <div className="flex flex-col gap-5 mx-4 md:mx-20  md:grid-cols-2 md:grid md:justify-between   md:border-y-2 md:border-solid md:border-[#616161] md:py-16">
          <div className="relative group group-hover:opacity-0">
            <Image
              src={background}
              width={500}
              height={500}
              className="w-full h-auto md:hidden"
              alt="image"
              objectFit="cover"
            />
            <Image
              src={backgroundDesktop}
              width={500}
              height={500}
              className="w-full h-auto hidden md:block group-hover:opacity-60"
              alt="image"
              objectFit="cover"
            />
            <p  className="font-clashDisplay font-semibold text-[#FFFFFF] text-[2.14rem] leading-[2.64rem] absolute left-0 right-0 top-8 bottom-0 my-auto mx-auto text-center z-0 md:hidden md:font-STIX Two Text md:font-bold md:text-[2.857rem] md:leading-[3.571rem] md:text-[#333333]">
              Boolean Egyptian
            </p>
            <p onClick={() => router.push("/marketplace")} className="cursor-pointer font-clashDisplay font-semibold text-[#FFFFFF] text-[2.14rem] leading-[2.64rem] absolute left-0 right-0   md:bottom-1/2 my-auto mx-auto text-center z-0 hidden md:block group-hover:block md:hidden ">
            View Product
            </p>
            <AiOutlineArrowRight
            onClick={() => router.push("/marketplace")}
              size={60}
              className="cursor-pointer rounded-full border-[0.5px] border-solid group-hover:block md:hidden text-[#FFFFFF] border-white   absolute left-2/3 right-0  bottom-10 md:bottom-1/2 my-auto mx-auto text-center px-2 z-0"
            />
          </div>
        
        <div className="md:grid md:grid-rows-3 md:place-content-evenly">
        <p className="font-clashDisplay font-semibold text-[black] text-[2.14rem] leading-[2.64rem] hidden  md:block md:place-self-start md:text-[#333333]">
        The Boolean Egyptian
            </p>
        <p className="font-Satoshi text-[#616161] text-[1.07rem] leading-[1.64rem] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div className="grid-cols-2 grid md:grid-cols-[170px_170px_200px] border-b-[0.5px] pb-7  border-black sm:mr-5 md:border-none md:mt-auto">

          <div className="relative md:mb-auto">
          <Image className="absolute z-[0]  top-0 left-0" src={thumbpic4} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[1] top-[0px] left-[25px]" src={thumbpic3} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[2] top-[0px] left-[50px]" src={thumbpic2} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[3] top-[0px] left-[75px]"  src={thumbpic1} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[4] top-[0px] left-[100px] " src={thumbpic} width={50} height={50} alt="thumbnail"/>
          </div>

          <p className="font-Satoshi text-base font-bold leading-[1.571rem] pt-5  text-[#000000] ">64 major creators</p>
          <AiOutlineArrowRight
            onClick={() => router.push("/auctions")}
              size={60}
              className="cursor-pointer rounded-full border-[0.5px] border-solid  md:text-[#616161] text-[#FFFFFF] border-white md:border-[#616161]  md:block hidden my-auto mx-auto text-center px-2 z-0"
            />
          </div>
        </div>
          
        </div>




        <div className="flex flex-col gap-5 mx-4 md:mx-20 md:grid-cols-2 md:grid md:justify-between  md:border-b-2 md:border-solid md:border-[#616161] md:py-16">
          <div className="relative md:order-last group  group-hover:opacity-0">
            <Image
              src={background1}
              width={500}
              height={500}
              className="w-full h-auto md:hidden"
              alt="image"
              objectFit="cover"
            />
            <Image
              src={backgroundDesktop1}
              width={500}
              height={500}
              className="w-full h-auto hidden md:block group-hover:opacity-60"
              alt="image"
              objectFit="cover"
            />
            <p className="font-clashDisplay font-semibold text-[#FFFFFF] text-[2.14rem] leading-[2.64rem] absolute left-0 right-0 top-8 bottom-0 my-auto mx-auto text-center z-0 md:hidden">
             Are We There Yet?
            </p>
            <p onClick={() => router.push("/marketplace")} className="cursor-pointer font-clashDisplay font-semibold text-[#FFFFFF] text-[2.14rem] leading-[2.64rem] absolute left-0 right-0   md:bottom-1/2 my-auto mx-auto text-center z-0 hidden md:block group-hover:block md:hidden ">
            View Product
            </p>
            <AiOutlineArrowRight
            onClick={() => router.push("/marketplace")}
              size={60}
              className="cursor-pointer rounded-full border-[0.5px] border-solid group-hover:block md:hidden text-[#FFFFFF] border-white   absolute left-2/3 right-0  bottom-10 md:bottom-1/2 my-auto mx-auto text-center px-2 z-0"
            />
          </div>

          <div className="md:grid md:grid-rows-3 md:place-content-evenly">
        <p className="font-clashDisplay font-semibold text-[black] text-[2.14rem] leading-[2.64rem] hidden  md:block md:place-self-start md:font-STIX  md:font-bold md:text-[2.857rem] md:leading-[3.571rem] md:text-[#333333]">
        Are We There Yet?
            </p>
        <p className="font-Satoshi text-[#616161] text-[1.07rem] leading-[1.64rem] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div className="grid-cols-2 grid md:grid-cols-[170px_170px_200px] border-b-[0.5px] pb-7  border-black sm:mr-5 md:border-none md:mt-auto">

          <div className="relative md:mb-auto">
          <Image className="absolute z-[0]  top-0 left-0" src={thumbpic4} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[1] top-[0px] left-[25px]" src={thumbpic3} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[2] top-[0px] left-[50px]" src={thumbpic2} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[3] top-[0px] left-[75px]"  src={thumbpic1} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[4] top-[0px] left-[100px] " src={thumbpic} width={50} height={50} alt="thumbnail"/>
          </div>

          <p className="font-Satoshi text-base font-bold leading-[1.571rem] pt-5  text-[#000000] ">64 major creators</p>
          <AiOutlineArrowRight
          onClick={() => router.push("/auctions")}
              size={60}
              className="cursor-pointer rounded-full border-[0.5px] border-solid  md:text-[#616161] text-[#FFFFFF] border-white md:border-[#616161]  md:block hidden my-auto mx-auto text-center px-2 z-0"
            />
          </div>
        </div>
          
          
        </div>



        <div className="flex flex-col gap-5 mx-4 md:mx-20  md:grid-cols-2 md:grid md:justify-between   md:py-16">
          <div className="relative group group-hover:opacity-0">
            <Image
              src={background2}
              width={500}
              height={500}
              className="w-full h-auto md:hidden"
              alt="image"
              objectFit="cover"
            />
            <Image
              src={backgroundDesktop2}
              width={500}
              height={500}
              className="w-full h-auto hidden md:block group-hover:opacity-70"
              alt="image"
              objectFit="cover"
            />
            <p className="font-clashDisplay font-semibold text-[#FFFFFF] text-[2.14rem] leading-[2.64rem] absolute left-0 right-0 top-8 bottom-0 my-auto mx-auto text-center z-0 md:hidden ">
            Oloibiri 1997
            </p>
            <p onClick={() => router.push("/marketplace")} className="cursor-pointer font-clashDisplay font-semibold text-[#FFFFFF] text-[2.14rem] leading-[2.64rem] absolute left-0 right-0   md:bottom-1/2 my-auto mx-auto text-center z-0 hidden md:block group-hover:block md:hidden ">
            View Product
            </p>
            <AiOutlineArrowRight
             onClick={() => router.push("/marketplace")}
              size={60}
              className="cursor-pointer rounded-full border-[0.5px] border-solid group-hover:block md:hidden text-[#FFFFFF] border-white   absolute left-2/3 right-0  bottom-10 md:bottom-1/2 my-auto mx-auto text-center px-2 z-0"
            />
          </div>

          <div className="md:grid md:grid-rows-3 md:place-content-evenly">
          <p className="font-clashDisplay font-semibold text-[black] text-[2.14rem] leading-[2.64rem] hidden  md:block md:place-self-start md:font-STIX md:font-bold md:text-[2.857rem] md:leading-[3.571rem] md:text-[#333333] ">
          Oloibiri 1997
            </p>
        <p className="font-Satoshi text-[#616161] text-[1.07rem] leading-[1.64rem] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div className="grid-cols-2 grid md:grid-cols-[170px_170px_200px] border-b-[0.5px] pb-7  border-black sm:mr-5 md:border-none md:mt-auto">

          <div className="relative md:mb-auto">
          <Image className="absolute z-[0]  top-0 left-0" src={thumbpic4} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[1] top-[0px] left-[25px]" src={thumbpic3} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[2] top-[0px] left-[50px]" src={thumbpic2} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[3] top-[0px] left-[75px]"  src={thumbpic1} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[4] top-[0px] left-[100px] " src={thumbpic} width={50} height={50} alt="thumbnail"/>
          </div>

          <p className="font-Satoshi text-base font-bold leading-[1.571rem] pt-5  text-[#000000] ">64 major creators</p>
          <AiOutlineArrowRight
          onClick={() => router.push("/auctions")}
              size={60}
              className="cursor-pointer rounded-full border-[0.5px] border-solid  md:text-[#616161] text-[#FFFFFF] border-white md:border-[#616161]  md:block hidden my-auto mx-auto text-center px-2 z-0"
            />
          </div>
        </div>
         
          
        </div>

        <div style ={{background:"linear-gradient(99.99deg, #4693ED -26.21%, #79C2D2 22.16%, rgba(192, 86, 9, 0.49) 111.62%)",  width:"100%"}} className=" mt-20  flex md:flex-col h-[25rem] md:h-[58.75rem] md:my-0 md:mx-0 px-4 py-8 md:px-16">
          <p className="text-left self-start px-10 py-2 underline underline-offset-8 font-Satoshi text-[2.85rem] leading-[3.86rem] font-medium hidden md:block text-[#FFFFFF] mb-12">See Upcoming Auctions and Exhibitions</p>
            <div className=" bg-[url('/Rectangle239.png')] md:bg-[url('/Rectangle91.png')] h-[20.81rem] w-[23.69rem] md:w-[100%] md:h-[44.125rem] bg-no-repeat bg-cover bg-center md:flex md:flex-col md:justify-end md:my-0 md:mx-0  md:py-20">
            <div className="md:ml-10  pl-2 flex gap-5 mt-10 items-center">
            <MdCircle size={25} fill={"#FFFFFF"}/>
            <p className="font-Bellefair text-white md:text-[2.0879rem] md:leading-[2.357rem]  text-[1.1rem] leading-[1.44rem] whitespace-pre-wrap ">MONALISA REDEFINED IN STYLE.</p>
            </div>

            <div className=" pl-2 flex gap-1 mt-6 items-center md:ml-10">
            <p className="font-Bellefair text-white text-[2.86rem] leading-[3.29rem] md:text-[4.829rem] md:leading-[5.5rem]  ">01.</p>

            <p className="font-Bellefair text-white   text-[1.1rem] leading-[1.44rem] whitespace-pre-wrap ">Start on : 08:00 GTS . Monday </p>
            </div>

            <p className="md:ml-10 md:font-medium text-white mt-6 text-[0.714rem] md:text-[1.132rem] font-Satoshi md:w-[75ch] md:tracking-[0.065em] ">GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
            <div className="text-white mt-6 flex justify-end items-center gap-5 mx-2">
            <p className="font-Satoshi underline text-base md:text-[1.714rem]">See more</p>
            <p  className="md:text-[1.714rem] font-Satoshi border rounded-xl text-base border-white border-solid px-4 py-2">Set a reminder</p>
            </div>
            </div>
            <div className="md:flex items-center justify-between hidden mt-8 ">
            <Image className="" src={Loader} width={200} height={200} alt="thumbnail"/>
            <Image className=" " src={Arrow} width={200} height={200} alt="thumbnail"/>
            </div>

        </div>

        <div className=" mt-32 flex flex-col ">
            <div  onClick={() => router.push("/marketplace")} className="md:px-20 cursor-pointer  flex py-6 items-center justify-between px-4 border border-[#000000] border-solid">
            <p className="font-Satoshi font-semibold text-[1.714rem] text-[#292929] leading-[2.29rem]">Explore marketplace</p>
            <AiOutlineArrowRight
              size={60}
              color={"#616161"}
              className="rounded-full  border-[0.5px] border-solid border-[#616161] md:border-none  px-2 z-0"
            />
            </div>
            <div  onClick={() => router.push("/auctions")} className="md:px-20 cursor-pointer flex py-6 items-center justify-between px-4 border border-[#000000] border-solid ">
            <p className="font-Satoshi font-semibold text-[1.714rem] text-[#292929] leading-[2.29rem]">See auctions</p>
            <AiOutlineArrowRight
              size={60}
              color={"#616161"}
              className="rounded-full  border-[0.5px] border-solid border-[#616161] md:border-none    px-2 z-0"
            />
            </div>
        </div>

        <div style ={{background:"#E2E2E2",  width:"100%"}} className=" mt-20  flex justify-center h-[30rem] md:h-[50rem] overflow-hidden ">
            <div className="relative">
            <div className="flex md:justify-between md:px-16 ">
            <p className="font-clashDisplay pt-10 pl-24  md:pl-auto  text-[1.714rem] leading-[2.64rem] md:text-[3.93rem] md:leading-[6.16rem]  font-semibold md:w-[20ch] ">TOP CREATORS OF THE WEEK.</p>
            <ul className="flex text-[#333333] md:text-[2.857rem] gap-2 overflow-x-scroll font-clashDisplay md:flex-col overflow-hidden md:overflow-hidden">
            <li>Editorials</li>
            <li>Fashion</li>
            <li>Lifestyle</li>
            <li>Blueprint</li>
            </ul>
            </div>


            <p className=" md:px-16 px-24 md:text-[2.857rem] text-black/[.57] mt-6 text-[0.929rem] font-clashDisplay font-extralight leading-[1.5rem] md:leading-[3rem]">“Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
</p>
           <p className="absolute md:text-[3.43rem] top-1/2 right-0 font-clashDisplay text-[#333333] font-bold leading-[3.57rem] text-[2.285rem] mx-20">
           CIRCA
           </p>
           <p className="font-clashDisplay text-[#161616] text-[4.571re md:text-[12.14rem] line-through text-right leading-[7.14rem]  mx-20 md:mx-auto">1985</p>



           <div className="absolute  -bottom-7 md:right-0 bg-[url('/Rectangle299(3).png')] h-[20.81rem] md:h-[50rem] w-[80%] bg-no-repeat bg-cover bg-center animate-waving-hand ">
           
            </div>

            </div>
        </div>
      </div>
    </main>
  );
}

export default FeaturedProducts;
