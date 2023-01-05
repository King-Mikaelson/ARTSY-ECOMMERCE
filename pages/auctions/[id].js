import { images } from '../../playlist';
import Image from 'next/image'
import {AiOutlineEye, AiOutlineClose, AiOutlineArrowRight} from 'react-icons/ai';
import {useRouter} from 'next/router';
import {IoIosSend} from 'react-icons/io';
import {AiFillHeart} from 'react-icons/ai';
import Chat1 from "/public/Chat1.png";
import Chat2 from "/public/Chat2.png";
import Chat3 from "/public/Chat3.png";
import Chat4 from "/public/Chat4.png";



export const getStaticProps = async ({ params }) => {
    const imagesArray = images.filter((p) => p.id.toString() === params.id);
    return {
      props: {
        imageList: imagesArray[0],
      },
    };
  };

export const getStaticPaths = async () => {

    const paths = images.map(user => {
        return{
            params: {id: user.id.toString()}
        }
    })
  
    return{
     paths,
     fallback:false
    }
}



const LiveBid = (imageList) => {
    console.log(imageList)
    const router = useRouter();

    return ( 
    <div className='overflow-hidden h-[92.7vh] md:h-screen md:grid grid-cols-1 md:justify-center md:items-center bg-[#FFFF]'>
        <p className="text-[1.2857rem] leading-[3.71rem] font-bold font-Satoshi border-b-4 border-solid border-[#BCB7B7] truncate  md:border-none md:pl-12 hidden md:block"><span className="text-[#BCB7B7]">Home/Auctions/</span>Livebid</p>

    <div  className=' md:grid grid-cols-2  h-[92.7vh] md:h-[80vh] md:mx-12 md:border border-solid border-black'>

    <div style={{background:`url(${imageList.imageList.image.src})`, backgroundRepeat:"no-repeat", backgroundSize:'cover'}} className="relative w-full h-full overflow-hidden text-[#FFFFFF]">
        <div  className='flex justify-between px-6 py-6 items-center '>
        <p className='font-Satoshi text-[1rem] font-medium md:hidden'>{imageList.imageList.title}</p>
        <div  className='flex gap-4  md:hidden'>

        <div className='flex gap-2'>
            <button className='font-Satoshi text-[0.8125rem] font-medium rounded-[5px] bg-[#006CA2] px-4'>Live</button>
            <div  className='flex items-center bg-[rgba(255,255,255,0.4)] gap-2 rounded-[5px] justify-around px-1 '>
            <AiOutlineEye size={25}/>
            <p className='font-Satoshi text-[0.8125rem] font-medium'>296</p>
            </div>
        </div>

        <div onClick={() => {router.push("/auctions")}}>
            <AiOutlineClose size={25}/>
        </div>

        

        </div>

        {/* For Desktop */}
        <div className='hidden md:block'>
        <div className='bg-[rgba(184,180,180,0.49)] rounded-full cursor-pointer' onClick={() => {router.push("/auctions")}}>
            <AiOutlineClose size={40}/>
        </div>
        </div>

        <button className='hidden md:block font-Satoshi text-[1.25rem] font-medium rounded-[5px] bg-[#006CA2] px-4'>Live</button>
       
        </div>

        <div className='flex justify-center items-center p-[15.5rem_0]'>    
        <p className='font-Satoshi text-[1.875rem] font-bold'>Current bid : $45.00</p>
        </div>


        <div className='absolute bottom-20 px-6 flex flex-col gap-5 md:hidden'>
        <div className='flex gap-2 items-center opacity-30'>
            <Image src={Chat1} alt="Chat1" width={50} height={50} className='rounded-full'/>
            <div>
                <p>Ella Flynn</p>
                <p>God abeg</p>
            </div>
        </div>
        <div className='flex gap-2 items-center'>
            <Image src={Chat2} alt="Chat1" width={50} height={50} className='rounded-full'/>
            <div>
                <p>Ella myre</p>
                <p>God Epp Me</p>
            </div>
        </div>

        <div className='flex gap-2 items-center'>
            <Image src={Chat3} alt="Chat1" width={50} height={50} className='rounded-full'/>
            <div>
                <p>Ella Alucard</p>
                <p>Dey Play</p>
            </div>
        </div>

        <div className='flex gap-2 items-center'>
            <Image src={Chat4} alt="Chat1" width={50} height={50} className='rounded-full'/>
            <div>
                <p>Ella Shotgun</p>
                <p>Just Dey Play</p>
            </div>
        </div>

        </div>

        <div className='absolute bottom-16 left-16 hidden md:block'>
        <p className=' font-Inter text-[1.5rem] font-medium'>{imageList.imageList.title}</p>
        </div>

        <div className='px-6 flex gap-6  absolute bottom-6 md:hidden'>
        <div className='flex items-center relative'>
        <input placeholder='Join conversation...' className='bg-transparent rounded-[15px] px-12 py-2 border border-solid border-[#FFFFFF]'/>
        <IoIosSend size={25} className='absolute right-4'/>
        </div>
        <AiFillHeart
        className="ml-auto text-[#F44336] border border-solid border-[#333333] rounded-full shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] "
        size={30}
        />
        </div>
        </div>

        <div className='hidden md:flex relative'>


        <div className=' px-6 flex flex-col gap-7'>
        <div className='flex gap-2 items-center opacity-30'>
            <Image src={Chat1} alt="Chat1" width={50} height={50} className='rounded-full'/>
            <div>
                <p className='text-[1.375rem] font-Satoshi text-[#333333]'>Ella Flynn</p>
                <p className='text-[1.375rem] font-Satoshi font-medium'>God abeg</p>
            </div>
        </div>
        <div className='flex gap-2 items-center'>
            <Image src={Chat2} alt="Chat1" width={50} height={50} className='rounded-full'/>
            <div>
                <p className='text-[1.375rem] font-Satoshi text-[#333333]'>Ella myre</p>
                <p className='text-[1.375rem] font-Satoshi font-medium'>God Epp Me</p>
            </div>
        </div>

        <div className='flex gap-2 items-center'>
            <Image src={Chat3} alt="Chat1" width={50} height={50} className='rounded-full'/>
            <div>
                <p className='text-[1.375rem] font-Satoshi text-[#333333]'>Ella Alucard</p>
                <p className='text-[1.375rem] font-Satoshi font-medium'>Dey Play</p>
            </div>
        </div>

        <div className='flex gap-2 items-center'>
            <Image src={Chat4} alt="Chat1" width={50} height={50} className='rounded-full'/>
            <div>
                <p className='text-[1.375rem] font-Satoshi text-[#333333]'>Ella Shotgun</p>
                <p className='text-[1.375rem] font-Satoshi font-medium'>Just Dey Play</p>
            </div>
        </div>


        <div className='flex gap-2 items-center'>
            <Image src={Chat1} alt="Chat1" width={50} height={50} className='rounded-full'/>
            <div>
                <p className='text-[1.375rem] font-Satoshi text-[#333333]'>Ella Flynn</p>
                <p className='text-[1.375rem] font-Satoshi font-medium'>God abeg</p>
            </div>
        </div>


        <div className='flex gap-2 items-center'>
            <Image src={Chat3} alt="Chat1" width={50} height={50} className='rounded-full'/>
            <div>
                <p className='text-[1.375rem] font-Satoshi text-[#333333]'>Ella Alucard</p>
                <p className='text-[1.375rem] font-Satoshi font-medium'>Dey Play</p>
            </div>
        </div>

        </div>
        
        <div className='absolute bottom-24 left-8'>
        <p className=' font-Inter text-[1.5rem] font-medium'>Creator : {imageList.imageList.artist}</p>
        </div>
        <div className='px-6 md:flex gap-6 absolute bottom-8 mb-auto hidden justify-between w-full'>
        <div className='flex items-center relative'>
        <input placeholder='Join conversation...' className='bg-transparent rounded-[15px] px-16 w-[100%] xl:w-[30rem]  py-4 border border-solid border-black'/>
        <IoIosSend size={25} className='absolute right-4'/>
        </div>
        <AiFillHeart
        className=" text-[#F44336] border border-solid border-[#333333]  rounded-full shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] "
        size={45}
        />
        </div>
        </div>
    </div>

    <div className="flex  items-center gap-2 py-6 px-12 cursor-pointer" onClick={() => {router.push("/drops")}}>
          <p className="text-center font-Satoshi text-[1.25rem] md:text-[1.5rem] text-[#333333]">
            See Upcoming Drops
          </p>
          <AiOutlineArrowRight
            size={40}
            className="rounded-full border-[0.5px] border-solid  border-black px-2 "
          />
        </div>

    </div>
     );
}
 
export default LiveBid;

LiveBid.getLayout = function PageLayout(page) {
    return (
        <>
        {page}
        </>
    )
}