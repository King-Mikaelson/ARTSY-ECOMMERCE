import React from "react";
import {AiOutlineMail} from "react-icons/ai";
import {FiMapPin} from "react-icons/fi";

function Footer() {
  return (
    <main className="mt-[5rem] text-[#333333]">
      <div className="px-3 flex flex-col gap-1 md:gap-5  md:justify-center md:my-0 md:mx-8 md:border-solid md:border-[#333333] md:border-[1px] md:py-10">
        <h3 className="font-Baskervville  text-twentyfour md:text-[2.785rem] leading-[2.214rem] uppercase text-[#333333] py-1 md:text-center">NewsLetter</h3>
        <p className="hidden md:block font-Satoshi text-[2.286rem] text-[#333333] md:text-center ">Subscribe to get daily updates on new drops & exciting deals </p>
        <p className=" md:hidden uppercase font-Satoshi text-[0.831rem] text-[#333333] leading-relaxed py-1 whitespace-normal ">SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS </p>
        <div className="flex flex-col md:flex-row md:gap-8 md:justify-center">
        <div className="w-full md:w-auto">
        <input className="md:hidden py-5 w-[90%] md:w-full outline-none px-3 md:px-36 md:text-right  border-solid border-[#333333] border-[1px] placeholder:uppercase placeholder:font-Satoshi placeholder:text-ten md:placeholder:text-sm text-ten" type="text" placeholder="Enter your email here" />
        <input className="hidden md:block py-5 w-[90%] md:w-full outline-none px-3 md:px-40 md:text-left  border-solid border-[#333333] border-[1px] placeholder:uppercase placeholder:font-Satoshi placeholder:text-ten md:placeholder:text-sm text-ten mt-5" type="text" placeholder="Enter your email" />

        </div>
        <button className="self-start mt-5 md:mt-auto bg-[#333333]  md:px-20 text-white py-5 px-12 text-center uppercase  ">Subscribe</button>
        </div>
      </div>

      <div className="md:flex md:justify-evenly md:items-center md:my-16">
        <h3 className="hidden md:block  font-clashDisplay font-semibold text-[3.43rem] leading-[4.212rem]">ARTSY.</h3>
        <div className="hidden md:flex md:gap-14">
        <ul className="text-[1.857rem] flex flex-col gap-5 mr-8 font-Satoshi">
          <li>Home</li>
          <li>Marketplace</li>
          <li>Auctions</li>
          <li>Drops</li>
        </ul>

        <ul className="text-[1.857rem] flex flex-col gap-5 ml-8 font-Satoshi">
          <li>Blog</li>
          <li>Wallets</li>
          <li>Rates</li>
          <li>High Bids</li>
        </ul>
        </div>
        
        <div className="flex px-3 gap-2 my-9 flex-col justify-start">
        <p className="md:hidden ">Reach Us</p>
        <div  className="flex gap-4 items-center">
        <AiOutlineMail size={30} />
        <p className="md:font-Satoshi md:text-[1.857rem] md:leading-[2.5rem]">artsystudios@gmail.com</p>
        </div>

        <div className="flex gap-4 items-center">
        <FiMapPin size={30} />
        <p className="md:font-Satoshi md:text-[1.857rem] md:leading-[2.5rem]">Lagos, Nigeria.</p>
        </div>
        </div>
      </div>
      <p className="hidden md:block text-center font-Rubik font-medium text-twentyfour">Artsystudios © 2022. All Rights Reserved.</p>

    </main>
  );
}

export default Footer;
