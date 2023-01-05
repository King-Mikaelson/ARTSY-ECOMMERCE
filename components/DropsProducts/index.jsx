import React from 'react'
import Image from "next/image";


function DropsProducts({imageList}) {



  return (
    <div>
    <p className="text-[1.2857rem] leading-[3.71rem] font-bold font-Satoshi border-b-4 border-solid border-[#BCB7B7] truncate  md:border-none md:pl-10"><span className="text-[#BCB7B7]">Home/Auctions/Livebid/</span>Drop</p>
     <div className='flex flex-col justify-center items-center'>
      <h1 className='font-Satoshi text-[1.875rem] leading-[3.25rem] md:text-[3rem] md:leading-[5.25rem] md:font-medium text-[#000000] mt-6 font-bold text-center'>Upcoming drops</h1>
      <p className='font-Satoshi text-[1.125rem] leading-[1.75rem] md:text-[2rem] md:leading-[4rem] text-[#616161] mt-6 px-9  text-center'>You may turn on notifications so that no drop will miss you.</p>
      <button  className='font-Satoshi text-[1.125rem] leading-[1.75rem] md:text-[2.25rem] md:leading-[4rem] text-[#616161] mt-3 border-2 border-solid border-[#000000] px-20 py-2 rounded-[6.2381px]'>Notify me</button>
     </div>
     <div className="py-4 px-4 flex justify-end mb-8 md:hidden">

<select name="category" className=" font-Satoshi text-[1.29rem] leading-[1.71rem]  mx-0 px-0">
  <option value="">Sort By</option>
  <option value="editorials">Editorials</option>
  <option value="fashion">Fashion</option>
  <option value="optics">Optics</option>
  <option value="art">Art & Museum</option>
  <option value="nature">Nature</option>
</select>
</div>

    <div>
    {imageList?.map((item, index) => (
        <div  key={index} className="md:grid-cols-2 md:grid xl:mx-64 mx-3 mt-10 md:justify-center md:items-center">
        <div  className="text-[#333333] w-fit md:w-[100%]  flex flex-col md:px-4 rounded-[15px] relative">
             <Image src={item?.image} width={358} height={384} alt="product image" className="w-[358px] h-[358px] md:w-[1280px] md:h-[441px] mx-0 my-auto"  /> 
            <p className='py-4 px-6 bg-[#4693ED] absolute top-6 right-4 rounded-[5px] font-Inter text-[0.875rem] leading-[0.94rem] font-medium text-[#FFF] uppercase md:hidden'>Upcoming</p>
            <div style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(245, 244, 244, 0.24)",border:"0.5px solid #FFFFFF", backdropFilter:"blur(1.5px)", borderRadius:"8px"}} className="text-[#FFF] py-4 px-8 xl:mx-6 absolute bottom-4 left-4 right-4 md:left-8 md:right-8">
            <p className='font-Satoshi md:text-[1.75rem] md:leading-[3rem] md:text-[#FFF] '>Time Remaining</p>
            <p className='md:hidden'>06  hrs : 45 min : 22 s</p>
            <div className='md:flex justify-between items-center hidden'>
            <p className='font-STIX text-[2.5rem] leading-[3rem] text-[#FFF] '>06  hrs : 45 min : 22 s</p>
            <p className='py-2 px-6  bg-[#4693ED] rounded-full  text-[1.5rem] leading-[1.44rem] font-medium text-[#FFF] font-Satoshi'>Live</p>
            </div>
            </div>
        </div>
        <div className='flex flex-col gap-5 md:justify-center' >
        <p className='py-4 px-6  md:px-8 bg-[#4693ED] rounded-[5px] font-Inter text-[1.125rem] leading-[1.375rem] font-medium text-[#FFF] uppercase hidden md:block md:self-start'>Upcoming</p>
        <p className='font-Satoshi text-[1rem] leading-[1.38rem] md:text-[1.25rem] md:leading-[1.6875rem] text-[#000000] mt-6'>November 21 at 11 am WAT</p> 
        <p  className='font-Satoshi md:text-[2.25rem] md:leading-[3.0625rem] text-[1.5rem] leading-[2rem] text-[#000000] font-medium'>{item.title}</p> 
        <p className='font-Satoshi md:w-[40ch] md:text-[1.25rem] md:leading-[1.9375rem] text-[0.9375rem] leading-[1.6875rem] text-[#616161] '>Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.</p>
        <p className='font-Satoshi text-[1.25rem] md:text-[1.5rem] leading-[1.9375rem] text-[#000000] font-medium'>Creator : <span className='text-[#006CA2]'>{item.artist}</span></p>
        <p className='text-[#006CA2] font-Satoshi md:text-[1.25rem] text-[1rem] leading-[1.5625rem] underline underline-offset-2'>Get notified</p>
        </div>
     
    </div> 
            ))}   
    </div>
    <div className=" cursor-pointer md:flex justify-center  pt-20 hidden">
        <p className="border-[1px] border-solid border-[#000000] rounded-[10px] px-4 py-4 cursor-pointer text-[2.14rem] ">See More</p>
        </div>
    </div>
  )
}

export default DropsProducts