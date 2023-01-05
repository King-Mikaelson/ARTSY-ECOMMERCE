import Img5 from "../../assets/Auction1.png";
import Img6 from "../../assets/Auction2.png";
import Img7 from "../../assets/Auction3.png";
import Img8 from "../../assets/Auction4.png";
import Img9 from "../../assets/Auctions5.png";
import Img10 from "../../assets/Auctions6.png";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  AiFillHeart,
  AiOutlineArrowRight,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";


// import required modules
import { Pagination, Navigation} from "swiper";


function AuctionsComponent({imageList}) {

  const router = useRouter()

  return (
    <div>
        <p className="hidden md:block text-[1.5rem] leading-[3.71rem] font-bold font-Satoshi border-b-4 border-solid border-[#BCB7B7]  md:border-none md:pl-12"><span className="text-[#BCB7B7]">Home/ </span>Auctions</p>
        <p className="text-[1.25rem] md:text-[1.75rem] text-[#333333] md:text-[#000000] font-Satoshi font-medium my-6 md:mx-12">
        Here’s an overview of products actively on auction, explore!
      </p>
      <div className="md:hidden">
      <Swiper
             slidesPerView={1}
             loop={true}
             pagination={{
               clickable: true,
             }}
             navigation={true}
             modules={[Pagination, Navigation]}
             className="mySwiper"
      >

      {imageList?.map((item, index) => (
        <SwiperSlide key={index}>
        <Image
          src={item?.image}
          alt="Auction1"
          width={359}
          height={250}
          className="w-[359px] h-[359px]"
        />
      </SwiperSlide>
      ))}
      </Swiper>
      </div>

      <div className="hidden md:block">
      <Swiper
             slidesPerView={3}
             slidesPerGroup={1}
             loop={true}
             loopFillGroupWithBlank={true}
             pagination={{
               clickable: true,
             }}
             modules={[Pagination]}
             className="mySwiper"
      >

{imageList?.map((item, index) => (
          <SwiperSlide key={index}>
          <div  className=" group  text-[#333333] w-fit  flex flex-col md:px-4 rounded-[15px] line-clamp-3  relative">
          <Image
             src={item?.image}
             alt="Auction1"
             width={359}
             height={184}
             className=" md:w-[485px] md:h-[396px] rounded-[15px] group-hover:w-[420px] group-hover:h-[330px] hidden md:block"
           />
           <div className="cursor-pointer" onClick={() => {router.push(`/auctions/${item?.id}`)}}>
           <p className="font-clashDisplay font-semibold text-[#FFFFFF] text-[2.14rem] leading-[2.64rem] absolute left-0 right-8   md:bottom-1/2 my-auto mx-auto text-center z-0 hidden  group-hover:block ">
             Join livestream
             </p>
             <AiOutlineArrowRight
               size={40}
               className="rounded-full border-[0.5px] border-solid group-hover:block hidden text-[#FFFFFF] border-white   absolute left-2/3 right-0  bottom-10 md:bottom-1/2 my-auto mx-auto text-center px-2 z-0"
             />
            </div>      
 
            <div style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(245, 244, 244, 0.24)",border:"0.5px solid #FFFFFF", backdropFilter:"blur(1.5px)", borderRadius:"8px"}} className="text-[#FFF] py-3 px-8 absolute bottom-12 left-12 right-12">
             <p className='font-STIX text-[2.5rem]  group-hover:text-[2rem] leading-[3rem] text-[#FFF] '>06  hrs : 45 min : 22 s</p>
         </div>
         </div>
         </SwiperSlide>
      ))}
      </Swiper>
      </div>
 
      <div>
        <p className="text-[#333333] md:text-[#000000] md:text-[2.25rem] text-[1.25rem] font-Satoshi font-medium md:font-bold md:my-12 md:mx-10 my-6">
          Top bids from popular creators
        </p>
        <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:mx-10">
          {imageList?.map((item, index) => ( 
                      <div key={index} className="flex flex-col">
                      <div className="shadow-[0px_0px_9px_-1px_rgba(0,0,0,0.25)] flex flex-col px-6 md:px-0 md:w-fit rounded-[15px]">
                          <AiFillHeart
                            className="ml-auto text-[#F44336] border border-solid border-[#333333] rounded-full my-1 md:my-2 md:mr-6"
                            size={30}
                          />
                          <div className="md:flex justify-center">
                          <Image
                            src={item?.image}
                            alt="Auction1"
                            width={359}
                            height={184}
                            className="w-[359px] h-[350px] md:hidden mx-0 my-auto"
                          />
                          <Image
                            src={item?.image}
                            alt="Auction1"
                            width={545}
                            height={280}
                            className="w-[545px] h-[280px] hidden md:block"
                          />
                          </div>
                          <div className="flex justify-between py-1 md:justify-start">
                          <p className="font-Satoshi text-[1.25rem] md:text-[2.5rem] text-[#333333] md:text-[#000000] font-bold md:my-6 md:mx-6">
                             {item?.name}
                            </p>
                            <p className="font-Satoshi text-[1.25rem] text-[#333333] font-bold md:hidden">
                              0.57 ETH
                            </p>
                          </div>
                        </div>
            
                        <div className="my-5 flex flex-col gap-4 md:gap-12 ">
                          <div className="flex flex-col justify-center gap-4 md:gap-8">
                            <div className="flex mx-5 gap-5 md:mx-0 ">
                              <p className="font-Satoshi text-[1.25rem] md:text-[2rem] text-[#616161] font-medium">
                                Creator :
                              </p>
                              <p className="font-Satoshi text-[1.25rem] md:text-[2rem] md:text-[#333333] text-[#006CA2] font-bold">
                                {item?.artist}
                              </p>
                            </div>
            
                            <div className="flex mx-5 gap-12 md:mx-0 ">
                            <p className="font-Satoshi text-[1.25rem] md:text-[2rem] text-[#616161] font-medium">
                                Date:
                              </p>
                              <p className="font-Satoshi text-[1.25rem] md:text-[2rem] text-[#333333] font-bold">
                                12/08/22
                              </p>
                            </div>
                          </div>
            
                          <div className="flex md:w-fit md:px-10 md:gap-36 justify-between items-center bg-[#F7F4F4] rounded-[10px] px-3 py-2">
                            <div className="flex flex-col gap-3">
                              <p className="font-Satoshi text-[1.125rem] text-[#616161]  md:text-[2rem]  font-bold">
                                Current Bid
                              </p>
                              <p className="font-Satoshi text-[1.25rem] text-[#333333] md:text-[2rem] md:text-[#000000] font-bold">
                                0.57 ETH
                              </p>
                            </div>
            
                            <button className="bg-[#3341C1] px-4 py-3 md:px-6 md:py-6 md:text-[1.56rem]  rounded-md font-Satoshi text-[1.078rem]  leading-[1.44rem] text-[#FFFFFF]">
                              Place Bid
                            </button>
                          </div>
                        </div>
                      </div>
          ))}
        </div>
        <div className="flex text-center justify-center items-center gap-2 py-6">
          <p className="text-center font-Satoshi text-[1.25rem] md:text-[1.5rem] text-[#333333]">
            Load More
          </p>
          <AiOutlineArrowRight
            size={40}
            className="rounded-full border-[0.5px] border-solid  border-black px-2 "
          />
        </div>
      </div>
    </div>
  );
}

export default AuctionsComponent;
