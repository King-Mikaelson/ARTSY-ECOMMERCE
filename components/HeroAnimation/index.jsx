import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "../../public/Rectangle230.png";
import Img2 from "../../public/Rectangle231.png";
import Img3 from "../../public/Rectangle232.png";
import Img4 from "../../public/Rectangle233.png";
import Img5 from "../../public/Rectangle234.png";


import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

function HeroAnimation() {
    const [products, setProducts] = useState([
        {
          id: 1,
          title: "PHILOMENA '22",
          price: "$3.90",
          category: "Fashion",
          img: Img1,
          mobile:true
        },
        {
          id: 2,
          title: "BOOLEAN EGYPTIAN",
          price: "$3.90",
          category: "Fashion",
          img: Img2,
          mobile:true

        },
        {
          id: 3,
          title: "BOOLEAN EGYPTIAN",
          price: "$3.90",
          category: "Fashion",
          img: Img3,
          mobile:true

        },
        {
          id: 4,
          title: "BOOLEAN EGYPTIAN",
          price: "$3.90",
          category: "Fashion",
          img: Img4,
          mobile:true
        },
        {
          id: 5,
          title: "BOOLEAN EGYPTIAN",
          price: "$3.90",
          category: "Fashion",
          img: Img5,
          mobile:true
        }
      ]);
  
  return (
<div className="swiperjs mt-[12rem] w-[100%] mb-[14rem] hidden md:block">
<div className="  w-[100%] flex gap-5" >
<div  className="w-[370px] h-[332px]">

<Swiper     spaceBetween={0}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper">

{products.map((item, index) => (
    <>
        <SwiperSlide  key={index}>
        <Image src={item.img}width={340} height={384} alt="product image" className="md:w-[100%] h-[100%]" />
        </SwiperSlide> 
        </>
          ))}
</Swiper>
</div>



<div  className="w-[358px] h-[428px] -mt-12">

<Swiper     spaceBetween={0}
        loop={true}
      autoplay={{
        delay: 1200,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper">

{products.map((item, index) => (
    <>
        <SwiperSlide  key={index}>
        <Image src={item.img}width={340} height={384} alt="product image" className="md:w-[100%] h-[100%]" />
        </SwiperSlide> 
        </>
          ))}
</Swiper>
</div>


<div  className="w-[358px] h-[444px] -mt-24">

<Swiper     spaceBetween={0}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper">

{products.map((item, index) => (
    <>
        <SwiperSlide  key={index}>
        <Image src={item.img}width={340} height={384} alt="product image" className="md:w-[100%] h-[100%] mx-0 px-0 my-auto" />
        </SwiperSlide> 
        </>
          ))}
</Swiper>
</div>


<div  className="w-[358px] h-[428px] -mt-12">

<Swiper     spaceBetween={0}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper">

{products.map((item, index) => (
    <>
        <SwiperSlide  key={index}>
        <Image src={item.img}width={340} height={384} alt="product image" className="md:w-[100%] h-[100%] mx-0 px-0 my-auto" />
        </SwiperSlide> 
        </>
          ))}
</Swiper>
</div>



<div  className="w-[358px] h-[428px] -mt-[2.5rem]">

<Swiper     spaceBetween={0}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper">

{products.map((item, index) => (
    <>
        <SwiperSlide  key={index}>
        <Image src={item.img}width={340} height={384} alt="product image" className="md:w-[100%] h-[100%] mx-0 px-0 my-auto" />
        </SwiperSlide> 
        </>
          ))}
</Swiper>
</div>

</div>
</div>
  )
}

export default HeroAnimation