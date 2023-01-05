/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useState } from "react";
import { AiOutlineSearch, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Link from "next/link";
import AppContext from "../Context/AppContext"
import { useContext } from "react";
import MultiRangeSlider from "../MultiRangeSlider.js";



const  Product = () => {
  const{data, cart, setCart,  storeState: {searchQuery, sort, price, filter, minVal,maxVal, filters},dispatchStore
} = useContext(AppContext);


console.log(filters)
  const setData = [...new Set(data?.map((item) => item.category ))]
  // console.log(data)

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);

  const transformProducts = () => {
    let sortedProducts = data;

    // Filter by category
    let itemOne = data.filter((item) => item.category === "men's clothing")
    let itemTwo = data.filter((item) => item.category === "jewelery")
    let itemThree = data.filter((item) => item.category === "electronics")
    let itemFour = data.filter((item) => item.category === "women's clothing")
    if(filters.checkbox1 && filters.checkbox4 && filters.checkbox3){
    sortedProducts = [...itemOne, ...itemFour, ...itemThree]
    }  else if(filters.checkbox1 && filters.checkbox2 && filters.checkbox3){
      sortedProducts = [...itemOne, ...itemTwo, ...itemThree]
    }else if(filters.checkbox1 && filters.checkbox2 && filters.checkbox4){
      sortedProducts = [...itemOne, ...itemTwo, ...itemFour]
    }else if(filters.checkbox1 && filters.checkbox2 ){
        sortedProducts = [...itemOne , ...itemTwo]
    } else if(filters.checkbox1  && filters.checkbox3){
        sortedProducts = [...itemOne, ...itemThree]
    } else if(filters.checkbox1 && filters.checkbox4){
        sortedProducts = [...itemOne, ...itemFour]
  }  else if(filters.checkbox2 && filters.checkbox3 && filters.checkbox4){
    sortedProducts = [...itemTwo, ...itemThree, ...itemFour]
  }else if(filters.checkbox2 && filters.checkbox3){
        sortedProducts = [...itemTwo, ...itemThree]
    } else if(filters.checkbox2 && filters.checkbox4){
        sortedProducts = [...itemTwo, ...itemFour]
    } else if(filters.checkbox3 && filters.checkbox4){
        sortedProducts = [...itemThree, ...itemFour]
    }else if(filters.checkbox2){
     sortedProducts = itemTwo
    }
    else if(filters.checkbox3 ){
      sortedProducts = itemThree
    }
    else if(filters.checkbox4){
      sortedProducts = itemFour
    }
    else if(filters.checkbox1){
      sortedProducts = itemOne
    }else{
      sortedProducts = data
    }

    // search
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    };
    // sort
    if (sort) {
      sortedProducts = sortedProducts.filter((item ) => item.category === sort);
  }

  // price
  if (price) {
      sortedProducts = sortedProducts.filter((item => {
        if (price === 99) {
          return item.price < 100;
        } else if (price === 100) {
          return item.price >= price && item.price <= price + 50;
        } else if (price === 150) {
          return item.price >= price && item.price <= price + 50;
        } else if (price === 200) {
          return item.price > price;
        }
      }))
  }

  // filter price by range
  if (minValue && maxValue) {
    sortedProducts = sortedProducts.filter((item) => item.price >= minValue && item.price <= maxValue);
  }



  return sortedProducts;
}
  return (
    <div className="md:grid md:grid-cols-[350px_1fr]  text-[#333333]">
      <div className="hidden md:flex flex-col items-center  gap-12 ">
        <div className="flex mt-4 bg-[#F4F2F2] rounded-[15px] py-2 px-2 gap-4">
          <AiOutlineSearch size={30} />
          <input onChange={(e) => dispatchStore({type:"SEARCH_QUERY", payload: e.target.value})} type="text" placeholder="Search" className=" bg-[#F4F2F2] placeholder:text-[1.714rem] outline-none border-none"   />
        </div>

        <div className="flex gap-20 flex-col">
          <div className="flex items-center gap-2 border-solid border-[#AFB091] border-b-4 ">
            <TbAdjustmentsHorizontal size={35} />
            <p className="text-[2.29rem] leading-[3.571rem] font-Satoshi font-medium">Filter</p>
          </div>

          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <p className="text-[2rem] leading-[3.14rem] font-Satoshi font-medium ">By category</p>
              <AiOutlineUp size={20} />
            </div>
    <div>

   <input checked={filters.checkbox1}  onChange={(e) => dispatchStore({ type: 'TOGGLE_CHECKBOX', name: e.target.name })}  className="text-[1.71rem] text-[#292929] font-Satoshi" type="checkbox" id="men's clothing" name="checkbox1"/>
    <label className="text-[1.71rem] text-[#292929] font-Satoshi capitalize" for="men's clothing">men's clothing</label><br></br>

    <input checked={filters.checkbox2}  onChange={(e) => dispatchStore({ type: 'TOGGLE_CHECKBOX', name: e.target.name })}  className="text-[1.71rem] text-[#292929] font-Satoshi" type="checkbox" id="jewelery" name="checkbox2"/>
    <label className="text-[1.71rem] text-[#292929] font-Satoshi capitalize" for="jewelery">jewelery</label><br></br>

    <input checked={filters.checkbox3}  onChange={(e) => dispatchStore({ type: 'TOGGLE_CHECKBOX', name: e.target.name })}  className="text-[1.71rem] text-[#292929] font-Satoshi" type="checkbox" id="electronics" name="checkbox3"/>
    <label className="text-[1.71rem] text-[#292929] font-Satoshi capitalize" for="electronics">electronics</label><br></br>

    <input checked={filters.checkbox4}  onChange={(e) => dispatchStore({ type: 'TOGGLE_CHECKBOX', name: e.target.name })}  className="text-[1.71rem] text-[#292929] font-Satoshi" type="checkbox" id="women's clothing" name="checkbox4"/>
    <label className="text-[1.71rem] text-[#292929] font-Satoshi capitalize" for="women's clothing">women's clothing</label><br></br>
    </div>


          </div>

          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <p className="text-[2rem] leading-[3.14rem] font-Satoshi font-medium ">By price</p>
              <AiOutlineUp size={20} />
            </div>
            <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) => {
              console.log(`min = ${min}, max = ${max}`);
              setMinValue(min);
              setMaxValue(max);
            }}
 />
          </div>

          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <p className="text-[2rem] leading-[3.14rem] font-Satoshi font-medium ">By artist</p>
              <AiOutlineUp size={20}/>
            </div>
            <div>
              <p className={price == "" ?"text-[1.71rem] text-[#292929] font-Satoshi underline underline-offset-8": "text-[1.71rem] text-[#292929] font-Satoshi "}>All</p>
              <p onClick={() => dispatchStore({type:"FILTER_BY_PRICE", payload:99})} className={price == 99 ?"text-[1.71rem] text-[#292929] font-Satoshi underline underline-offset-8": "text-[1.71rem] text-[#292929] font-Satoshi "}>Below $100.00</p>
              <p  onClick={() => dispatchStore({type:"FILTER_BY_PRICE", payload:100})}className={price == 100 ?"text-[1.71rem] text-[#292929] font-Satoshi underline underline-offset-8": "text-[1.71rem] text-[#292929] font-Satoshi "}>$100.00 - $150.00</p>
              <p  onClick={() => dispatchStore({type:"FILTER_BY_PRICE", payload:150})} className={price == 150 ?"text-[1.71rem] text-[#292929] font-Satoshi underline underline-offset-8": "text-[1.71rem] text-[#292929] font-Satoshi "}>$150.00 - $200.00</p>
              <p  onClick={() => dispatchStore({type:"FILTER_BY_PRICE", payload:200})} className={price == 200 ?"text-[1.71rem] text-[#292929] font-Satoshi underline underline-offset-8": "text-[1.71rem] text-[#292929] font-Satoshi "}>Above $200.00</p>
            </div>
          </div>

          <div onClick={() => dispatchStore({type:"CLEAR_FILTERS"})} className="flex items-center gap-4 mb-2">
        <p className="border-[1px] border-solid border-[#000000] rounded-[10px] px-4 py-4 cursor-pointer text-[1.5rem] ">Clear Filters</p>
        </div>

          {/* <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <p className="text-[2rem] leading-[3.14rem] font-Satoshi font-medium ">Collection year</p>
              <AiOutlineDown size={20}/>
            </div>
            <div>
              <p className="text-[1.71rem] text-[#292929] font-Satoshi underline">All</p>
              <p className="text-[1.71rem] text-[#292929] font-Satoshi">1990</p>
              <p className="text-[1.71rem] text-[#292929] font-Satoshi">1995</p>
              <p className="text-[1.71rem] text-[#292929] font-Satoshi">2001</p>
              <p className="text-[1.71rem] text-[#292929] font-Satoshi">2010</p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="">
        <div className="hidden md:flex justify-between shadow-[4px_4px_64px_rgba(0,0,0,0.1)] rounded-[15px] py-4 px-4  mb-8 w-[90%] mx-o my-auto items-center">
          <p className="font-Satoshi text-[1.71rem] leading-[2.71rem]">See 1-6 of 15 results</p>
          <select onChange={(e) =>  dispatchStore({type:"SORT_BY_CATEGORY", payload:e.target.value})} name="category" className="border-[0.4px] border-solid border-[#000000] rounded-[8px] px-4 py-4 cursor-pointer">
          <option value="">Sort By</option>
              {setData?.map((item,index) => (
              <option key={index}  value={item}>{item}</option>
              ))}
            </select>
        </div>
        <div className="mx-4 md:hidden">
        <p className="text-[1.2857rem] leading-[3.71rem] font-bold font-Satoshi"><span className="text-[#BCB7B7]">Home/ Marketplace/</span> Editorials</p>
        <p className="font-Poppins text-[1.14rem] leading-[1.71rem] font-normal italic mb-4">Showing 1-5  of 18 results</p>
        <div className="shadow-[4px_4px_64px_rgba(0,0,0,0.1)] rounded-[15px] py-4 px-4 flex justify-between mb-8">
        <select onChange={(e) =>  dispatchStore({type:"SORT_BY_CATEGORY", payload:e.target.value})} name="category" className=" font-Satoshi text-[1.29rem] leading-[1.71rem]">
              <option value="">Filter</option>
              {setData?.map((item,index) => (
              <option key={index} value={item}>{item}</option>
              ))}
            </select>

            <select onChange={(e) =>  dispatchStore({type:"SORT_BY_CATEGORY", payload:e.target.value})} name="category" className=" font-Satoshi text-[1.29rem] leading-[1.71rem]  mx-0 px-0">
              <option value="">Sort By</option>
              {setData?.map((item,index) => (
              <option key={index}  value={item}>{item}</option>
              ))}
            </select>
        </div>
        </div>
        <div className="md:grid  md:grid-cols-2 xl:grid-cols-3 md:gap-10 flex flex-col justify-center items-center gap-10">
          {transformProducts()?.map((item, index) => (
          <div key={index} class="md:shadow-[0_34px_68px_rgba(217,225,244,0.36)]  text-[#333333] w-fit  flex flex-col md:px-4 rounded-[15px] line-clamp-3 ">
            <Link href={`/marketplace/${item?.id}`}> <Image src={item?.image} width={340} height={384} alt="product image" className="md:w-[17.2rem] h-[20rem] mx-0 my-auto  border-solid border-[0.5px] border-[#333333]" /></Link>
            <div className="flex md:flex-col justify-center pt-4 md:py-8 md:gap-4 cursor-pointer md:w-fit line-clamp-3">
            <p className="mr-auto text-left font-medium text-[1.14rem] md:text-[1.571rem] leading-[1.79rem] md:leading-[2.5rem] font-Satoshi line-clamp-3">{item?.title.split(" ").splice(0,3).join(" ")}</p>
            <p className="ml-auto text-right md:text-left md:ml-0 font-medium md:font-bold md:text-[2rem] text-[1.14rem]  leading-[1.79rem] font-Satoshi">$ {item?.price}</p>
            </div>
          </div>
          ))}
        </div>
        <div className=" cursor-pointer md:flex justify-center pr-[20rem] my-auto pt-20 hidden">
        <p className="border-[1px] border-solid border-[#000000] rounded-[10px] px-4 py-4 cursor-pointer text-[2.14rem] ">See More</p>
        </div>
      </div>
    </div>
  );
}

export default  Product