import Image from "next/image";
import {AiOutlinePlus, AiOutlineMinus, AiOutlineHeart, AiOutlineDown, AiOutlineUp, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState, useRef, useEffect, useContext } from "react";
import { FiPlus, } from "react-icons/fi";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AppContext from "../../components/Context/AppContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";







export const getStaticPaths = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await  res.json();

    const paths = data.map(user => {
        return{
            params: {id: user.id.toString()}
        }
    })
  
    return{
     paths,
     fallback:false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await  res.json();
    const res1 = await fetch(`https://fakestoreapi.com/products/`)
    const data1 = await  res1.json();
  
    return{
      props:{content : data, content1: data1}
    }
  }

function Item({content, content1}) {
    const swiperRef = useRef();
    const swiperRef1 = useRef();


    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);


  const contentRef = useRef(null);
  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);


  const {qty, addToCart, dispatch,setQty, state} = useContext(AppContext);

  
  const IncreaseQty = () => {
    setQty(prevValue => prevValue + 1);
    console.log("IncreaseQty")

  }

  const DecreaseQty = () => {
    if(qty > 1){
      setQty(prevValue => prevValue - 1);
    }
    console.log("DecreaseQty")
  }

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
      contentRef1.current.style.maxHeight = active1
      ? `${contentRef1.current.scrollHeight}px`
      : "0px";
      contentRef2.current.style.maxHeight = active2
      ? `${contentRef2.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active, active1, active2, contentRef1, contentRef2]);
  

  const toggleAccordion = () => {
    setActive(!active);
  };

  const toggleAccordion1 = () => {
    setActive1(!active1);
  };

  const toggleAccordion2 = () => {
    setActive2(!active2);
  };

  console.log(state.cart)


  return (
    <div className="mt-24 md:mt-36 mx-2">
    <p className="text-[1.2857rem] leading-[3.71rem] font-bold font-Satoshi border-b-4 border-solid border-[#BCB7B7] truncate md:truncate md:border-none md:pl-10"><span className="text-[#BCB7B7]">Home/ Marketplace/Editorials/</span>{content.title}</p>
    <div className="flex flex-col md:grid md:grid-cols-[600px_1fr] md:mx-10  mt-8 md:border-2 md:border-solid md:border-[#333333] justify-center items-center ">
    <Image src={content.image} width={357} height={384} alt="product image" className="lg:w-[33rem] md:h-[40.875rem] w-[22.3rem] h-[24rem] mx-8 my-auto flex justify-center items-center self-center  border-solid border-[0.5px] md:border-none border-[#333333]" />
    <div  className="md:border-l-2 md:border-solid md:border-[#333333] md:pb-0 md:mb-0">
    <div className="flex md:flex-col lg:flex-row justify-between pt-4 md:py-8 mx-2 md:border-b-2 md:border-solid md:border-[#333333]">
    <p className="font-medium text-[1rem] md:text-[2.875rem] md:leading-[2.8125rem] md:font-bold leading-[1.56rem] text-[#333333] font-Satoshi overflow-clip text-ellipsis ">{content.title}</p>
    <p className="font-medium text-[1rem]  leading-[1.56rem] text-[#333333] font-Satoshi md:font-STIX md:text-[2.5rem] md:leading[3.94rem]">${content.price}</p>
    </div>
    <div className=" pt-4 md:py-8 mx-2 flex flex-col gap-5 md:gap-10">
        <p className="font-medium text-[1rem]  leading-[1.56rem] text-[#000000] md:font-normal md:text-[1.875rem]  md:leading-[1.8125rem] md:text-[#616161] font-Satoshi">Creator : <span className="text-[#006CA2] md:font-medium">Ali Dawa</span></p>
        <p className="font-medium text-[1rem]  leading-[1.56rem] text-[#616161] md:text-[1.5rem] md:leading-[1.4375rem] md:font-normal  font-Satoshi">Made in Italy</p>
        <p className="font-medium text-[1rem]  leading-[1.56rem] text-[#616161] md:text-[#000000] md:text-[1.75rem] md:leading-[1.6875rem] font-Satoshi">Total views: <span className="md:text-[#616161]">1.7K</span></p>
    </div>
    <div className=" pt-4 md:py-4 mx-2 flex flex-col ">
        <div className="flex items-center gap-4">
        <button onClick={() => {DecreaseQty()}} ><AiOutlineMinus size={30} color={"#333333"}/></button>
        <p className="font-medium text-[1.875rem] md:text-[2.25rem]  leading-[1.8125rem] text-[#333333] font-Satoshi">{qty}</p>
        <button onClick={() => {IncreaseQty()}} ><AiOutlinePlus size={30} color={"#333333"}/></button>
        </div>

    <div className="flex items-center gap-5 pt-6 md:pt-12 pb-12 ">
       <button onClick={() => {addToCart({...content, qty}); setQty(1)}}  className="bg-[#3341C1] px-16 py-5 rounded-md font-Satoshi text-[1.078rem]  leading-[1.44rem] text-[#FFFFFF]">Add to cart</button> 
       <AiOutlineHeart className="border-solid border-2 border-[#161616] px-2 rounded-md " size={62}/>
    </div>

    <div className="pb-20 md:pb-0 md:mb-0">

    <div>
        <div>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style font-Satoshi md:text-[2rem] md:leading-[1.94rem]">
                 Descriptions
                </h4>
                {active ? <AiOutlineUp  className="question-icon"/> :  <AiOutlineDown  className="question-icon"/>}
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider expanded` : `answer`}
              >
                <p>{content.description}</p>
              </div>
            </div>
          </button>
        </div>
      </div>


      <div >
        <div>
          <button
            className={`question-section ${active1}`}
            onClick={toggleAccordion1}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style font-Satoshi md:text-[2rem] md:leading-[1.94rem]">
                  Listing
                </h4>
                {active1 ? <AiOutlineUp  className="question-icon"/> :  <AiOutlineDown  className="question-icon"/>}
              </div>
              <div
                ref={contentRef1}
                className={active1 ? `answer answer-divider expanded` : `answer`}
              >
                <p>{content.category}</p>
              </div>
            </div>
          </button>
        </div>
      </div>



      <div >
        <div>
          <button
            className={`question-section ${active2}`}
            onClick={toggleAccordion2}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style font-Satoshi md:text-[2rem] md:leading-[1.94rem]">
                  Status
                </h4>
                {active2 ? <AiOutlineUp  className="question-icon"/> :  <AiOutlineDown  className="question-icon"/>}
              </div>
              <div
                ref={contentRef2}
                className={active2 ? `answer answer-divider expanded` : `answer`}
              >
                        <p>Count: {content.rating.count}</p>   
                       <p>Rating: {content.rating.rate}</p>
              </div>
            </div>
          </button>
        </div>
      </div>

    </div>
    

    </div>
    </div>
    </div>

    <div className="swiperjs md:hidden">
    <p className="font-medium text-[1.5rem]  leading-[2.375rem] text-[#292929] font-Satoshi mb-4 hidde">More From This Collection</p>

    <div className="border-solid border-2 border-[#333333] px-2" >
    <AiOutlineHeart className="ml-auto my-2 "  size={40}/>
    <Swiper     onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }} modules={[Navigation]}  className="mySwiper">

    {content1.map((item, index) => (
        <>
            <SwiperSlide  key={index}>
            <div>
            <div className="relative">
            <button className="absolute left-0 top-1/2 border-[#D9D9D9] rounded-full border-[0.5px] border-solid " onClick={() => swiperRef.current?.slidePrev()}>< AiOutlineLeft color="#FFFFFF" size={50}/></button>
            <Image src={item.image}width={340} height={384} alt="product image" className="md:w-[17.2rem] h-[20rem] mx-0 px-0 my-auto border-solid border-2 border-[#333333]" />
            <button className="absolute right-0 top-1/2  border-[#D9D9D9] rounded-full border-[0.5px] border-solid " onClick={() => swiperRef.current?.slideNext()}><AiOutlineRight  color="#FFFFFF" size={50}/></button> 
            </div>
            <div className="flex py-4 justify-between">
            <p className="truncate font-medium text-[1.69rem]  leading-[1.44rem]  text-[#333333] font-Satoshi">Soso</p>
            <p  className="font-medium text-[1.69rem]  leading-[1.44rem] text-[#333333] font-Satoshi">${item.price}</p>
            </div>
            </div> 
            </SwiperSlide> 
            </>
              ))}
    </Swiper>

  </div>
    </div>



    <div className="swiperjs hidden md:block">
    <div class="shadow-[4px_4px_64px_rgba(0,0,0,0.8)] py-4 px-6 mx-8 flex rounded-[15px] my-28 justify-between items-center">
    <p className="font-medium text-[2rem]  leading-[2rem] text-[#333333] font-Satoshi">Explore More From This Collection</p>
    <div className="flex gap-7">
    <button className="border-[#D9D9D9] rounded-full border-[0.5px] border-solid py-1 px-1 " onClick={() => swiperRef1.current?.slidePrev()}>< AiOutlineLeft color="#333333" size={40}/></button>
    <button className=" border-[#D9D9D9] rounded-full border-[0.5px] border-solid py-1 px-1" onClick={() => swiperRef1.current?.slideNext()}><AiOutlineRight  color="#333333" size={40}/></button> 
    </div>
    </div>
    <div className="px-2" >
    <Swiper     onBeforeInit={(swiper) => {
          swiperRef1.current = swiper;
        }} modules={[Navigation, Pagination]}  className="mySwiper"  slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        >
        
    {content1.map((item, index) => (
        <>
            <SwiperSlide  key={index}>
            <div  className="border-solid border-2 border-[#333333] px-6">
            <AiOutlineHeart className="ml-auto my-2 "  size={40}/>
            <Link href={`/marketplace/${item?.id}`}>
            <Image src={item.image}width={340} height={384} alt="product image" className="md:w-[20.2rem] h-[20rem] mx-0 px-0 my-auto border-solid border-2 border-[#333333]" />
            </Link>
            <div className="flex py-8 justify-between">
            <p className="truncate font-medium text-[1.69rem]  leading-[1.44rem]  text-[#333333] font-Satoshi">Soso</p>
            <p  className="font-medium text-[1.69rem]  leading-[1.44rem] text-[#333333] font-Satoshi">${item.price}</p>
            </div>
            </div> 
            </SwiperSlide> 
            </>
              ))}
    </Swiper>

  </div>
    </div>
    <div className="flex justify-center my-20">
    <Link href="/marketplace">
    <p  style ={{border:"1px solid", borderImage : "linear-gradient(45deg, purple ,orange) 1"}} className=" textRadius px-4 py-4 cursor-pointer text-[2.14rem]  justify-center items-center mx-0 my-auto text-center ">Explore all</p>
    </Link>
    </div>
    </div>
  )
}

export default Item
