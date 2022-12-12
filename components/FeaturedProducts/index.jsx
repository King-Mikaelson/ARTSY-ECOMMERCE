import background from "../../public/Rectangle 236.png";
import background1 from "../../public/Rectangle 230.png";
import background2 from "../../public/Rectangle 230 (1).png"
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import {MdCircle} from "react-icons/md";
import thumbpic from "../../public/Ellipse 18.png";
import thumbpic1 from "../../public/Ellipse 17.png";
import thumbpic2 from "../../public/Ellipse 16.png";
import thumbpic3 from "../../public/Ellipse 15.png";
import thumbpic4 from "../../public/Ellipse 14.png";

function FeaturedProducts() {
  return (
    <main className=" mt-0 mb-0">
      <h3 className="text-[#292929] mx-4 font-Satoshi font-bold text-[2rem] leading-[3.143rem]">
        Featured products
      </h3>
      <div className="mt-5">
        <div className="flex flex-col gap-5 mx-4  md:grid-cols-2 md:grid md:items-center">
          <div className="relative">
            <Image
              src={background}
              width={500}
              height={500}
              className="w-full h-auto"
              alt="image"
              objectFit="cover"
            />
            <p className="font-clashDisplay font-semibold text-[#FFFFFF] text-[2.14rem] leading-[2.64rem] absolute left-0 right-0 top-8 bottom-0 my-auto mx-auto text-center z-0">
              Boolean Egyptian
            </p>
            <AiOutlineArrowRight
              size={60}
              color={"#FFFFFF"}
              className="rounded-full border-[0.5px] border-solid border-white absolute left-2/3 right-0  bottom-10 my-auto mx-auto text-center px-2 z-0"
            />
          </div>
        
        <div>
        <p className="font-Satoshi text-[#616161] text-[1.07rem] leading-[1.64rem] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div className="grid-cols-2 grid  border-b-[0.5px] pb-7  border-black sm:mr-5 md:border-none ">

          <div className="relative">
          <Image className="absolute z-[0]  top-0 left-0" src={thumbpic4} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[1] top-[0px] left-[25px]" src={thumbpic3} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[2] top-[0px] left-[50px]" src={thumbpic2} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[3] top-[0px] left-[75px]"  src={thumbpic1} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[4] top-[0px] left-[100px] " src={thumbpic} width={50} height={50} alt="thumbnail"/>
          </div>

          <p className="font-Satoshi text-base font-bold leading-[1.571rem] pt-5  text-[#000000] ">64 major creators</p>

          </div>
        </div>
          
        </div>




        <div className="flex flex-col gap-5 mt-9 mx-4  md:grid-cols-2 md:grid md:items-center">
          <div className="relative">
            <Image
              src={background1}
              width={500}
              height={500}
              className="w-full h-auto"
              alt="image"
              objectFit="cover"
            />
            <p className="font-clashDisplay font-semibold text-[#FFFFFF] text-[2.14rem] leading-[2.64rem] absolute left-0 right-0 top-8 bottom-0 my-auto mx-auto text-center z-0">
             Are We There Yet?
            </p>
            <AiOutlineArrowRight
              size={60}
              color={"#FFFFFF"}
              className="rounded-full border-[0.5px] border-solid border-white absolute left-2/3 right-0  bottom-10 my-auto mx-auto text-center px-2 z-0"
            />
          </div>

        <div>
        <p className="font-Satoshi text-[#616161] text-[1.07rem] leading-[1.64rem] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div className="grid-cols-2 grid  border-b-[0.5px] pb-7  border-black md:border-none ">

          <div className="relative">
          <Image className="absolute z-[0]  top-0 left-0" src={thumbpic4} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[1] top-[0px] left-[25px]" src={thumbpic3} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[2] top-[0px] left-[50px]" src={thumbpic2} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[3] top-[0px] left-[75px]"  src={thumbpic1} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[4] top-[0px] left-[100px] " src={thumbpic} width={50} height={50} alt="thumbnail"/>
          </div>

          <p className="font-Satoshi text-base font-bold leading-[1.571rem] pt-5   text-[#000000] ">64 major creators</p>

          </div>
        </div>
          
          
        </div>



        <div className="flex flex-col gap-5 mt-9 mx-4 md:grid-cols-2 md:grid md:items-center">
          <div className="relative">
            <Image
              src={background2}
              width={500}
              height={500}
              className="w-full h-auto"
              alt="image"
              objectFit="cover"
            />
            <p className="font-clashDisplay font-semibold text-[#FFFFFF] text-[2.14rem] leading-[2.64rem] absolute left-0 right-0 top-8 bottom-0 my-auto mx-auto text-center z-0">
            Oloibiri 1997
            </p>
            <AiOutlineArrowRight
              size={60}
              color={"#FFFFFF"}
              className="rounded-full border-[0.5px] border-solid border-white absolute left-2/3 right-0  bottom-10 my-auto mx-auto text-center px-2 z-0"
            />
          </div>

        <div>
        <p className="font-Satoshi text-[#616161] text-[1.07rem] leading-[1.64rem] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div className="grid-cols-2 grid  border-b-[0.5px] pb-7  border-black md:border-none  md:grid-cols-none md:grid ">

          <div className="relative">
          <Image className="absolute z-[0]  top-0 left-0" src={thumbpic4} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[1] top-[0px] left-[25px]" src={thumbpic3} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[2] top-[0px] left-[50px]" src={thumbpic2} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[3] top-[0px] left-[75px]"  src={thumbpic1} width={50} height={50} alt="thumbnail"/>
            <Image className="absolute z-[4] top-[0px] left-[100px] " src={thumbpic} width={50} height={50} alt="thumbnail"/>
          </div>

          <p className="font-Satoshi text-base font-bold leading-[1.571rem] pt-5   text-[#000000] ">64 major creators</p>

          </div>
        </div>
         
          
        </div>

        <div style ={{background:"linear-gradient(99.99deg, #4693ED -26.21%, #79C2D2 22.16%, rgba(192, 86, 9, 0.49) 111.62%)",  width:"100%", height:"25rem"}} className=" mt-20  flex justify-center items-center">
            <div className=" bg-[url('/Rectangle239.png')] h-[20.81rem] w-[23.69rem] bg-no-repeat bg-cover bg-center">
            <div className="pl-2 flex gap-5 mt-10 items-center">
            <MdCircle size={25} fill={"#FFFFFF"}/>
            <p className="font-Bellefair text-white text-[1.1rem] leading-[1.44rem] whitespace-pre-wrap ">MONALISA REDEFINED IN STYLE.</p>
            </div>

            <div className=" pl-2 flex gap-1 mt-6 items-center">
            <p className="font-Bellefair text-white text-[2.86rem] leading-[3.29rem] ">01.</p>

            <p className="font-Bellefair text-white text-[1.1rem] leading-[1.44rem] whitespace-pre-wrap ">Start on : 08:00 GTS . Monday </p>
            </div>

            <p className="text-white mt-6 text-[10px] font-Satoshi ">GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
            <div className="text-white mt-6 flex justify-end items-center gap-5 mx-2">
            <p className="font-Satoshi underline text-base">See more</p>
            <p  className="font-Satoshi border rounded-xl text-base border-white border-solid px-4 py-2">Set a reminder</p>
            </div>
            </div>
        </div>

        <div className=" mt-32 flex flex-col ">
            <div className="flex py-6 items-center justify-between px-4 border border-[#000000] border-solid">
            <p className="font-Satoshi font-semibold text-[1.714rem] text-[#292929] leading-[2.29rem]">Explore marketplace</p>
            <AiOutlineArrowRight
              size={60}
              color={"#616161"}
              className="rounded-full  border-[0.5px] border-solid border-[#616161]  px-2 z-0"
            />
            </div>
            <div className="flex py-6 items-center justify-between px-4 border border-[#000000] border-solid ">
            <p className="font-Satoshi font-semibold text-[1.714rem] text-[#292929] leading-[2.29rem]">See auctions</p>
            <AiOutlineArrowRight
              size={60}
              color={"#616161"}
              className="rounded-full  border-[0.5px] border-solid border-[#616161]   px-2 z-0"
            />
            </div>
        </div>

        <div style ={{background:"#E2E2E2",  width:"100%", height:"24rem"}} className=" mt-20  flex justify-center">
            <div className="relative">
            <div className="flex">
            <p className="font-clashDisplay pt-10  text-[1.714rem] leading-[2.64rem] font-semibold ">TOP CREATORS OF THE WEEK.</p>
            <ul className="flex text-[#333333] gap-2 overflow-x-scroll font-clashDisplay">
            <li>Editorials</li>
            <li>Fashion</li>
            <li>Lifestyle</li>
            <li>Blueprint</li>
            </ul>
            </div>


            <p className="text-black/[.57] mt-6 text-[0.929rem] font-clashDisplay font-extralight leading-[1.5rem]">“Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
</p>
           <p className="absolute top-1/2 right-0 font-clashDisplay text-[#333333] font-bold leading-[3.57rem] text-[2.285rem] mx-6">
           CIRCA
           </p>
           <p className="font-clashDisplay text-[#161616] text-[4.571rem] line-through text-right leading-[7.14rem]">1985</p>



           <div className="absolute  -bottom-7 bg-[url('/Rectangle239.png')] h-[20.81rem] w-[100%] bg-no-repeat bg-cover bg-center animate-waving-hand">
           
            </div>

            </div>
        </div>
      </div>
    </main>
  );
}

export default FeaturedProducts;
