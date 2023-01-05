import Image from "next/image";
import { useEffect } from "react";
import HeroAnimation from "../HeroAnimation";



function Hero() {
  useEffect(() => {
  class Card {
    constructor({
      imageUrl,
      onDismiss
    }){
      this.imageUrl = imageUrl;
      onDismiss = onDismiss;
      this.#init();
    }

  
    #startPoint;
    #offsetX;
    #offsetY;

   #init = () => {
    const card = document.createElement('div');
    card.classList.add('card');
    const img = document.createElement('img');
    img.src = this.imageUrl;
    card.append(img);
    this.element = card;
    this.#listenToMouseEvents();
   }

   #listenToMouseEvents = () =>{
    // mousedown
    this.element.addEventListener('mousedown', e =>  {
      const {clientX, clientY} = e;
      this.#startPoint = {x: clientX, y: clientY};

      // no transition when moving
      this.element.style.transition = '';
      document.addEventListener('mousemove', this.#handleMouseMove);

      // mouseUp
      document.addEventListener('mouseup', this.#handleMouseUp);

      // prevent Drag
      this.element.addEventListener('dragstart', e => e.preventDefault());
    })
   }

   #handleMouseMove = (e) => {
    if(!this.#startPoint) return;
    const {clientX, clientY} = e;
    this.#offsetX = clientX - this.#startPoint.x;
    this.#offsetY = clientY - this.#startPoint.y;

    const rotate = this.#offsetX * 0.1;

    this.element.style.transform = `translate(${this.#offsetX}px, ${this.#offsetY}px) rotate(${rotate}deg)`;

    // dismiss card when moving too far away
    if (Math.abs(this.#offsetX) > this.element.clientWidth * 0.7) {
      const direction = this.#offsetX > 0 ? 1 : -1;
      this.#dismiss(direction);
    }
   }

   #handleMouseUp = () => {
    this.#startPoint = null;
    document.removeEventListener('mousemove', this.#handleMouseMove);
    // transition when move back
    this.element.style.transition = 'transform 0.5s';
    this.element.style.transform = '';
   }

   #dismiss = (direction) => {
    this.#startPoint = null;
    document.removeEventListener('mouseup', this.#handleMouseUp);
    document.removeEventListener('mousemove', this.#handleMouseMove);

    this.element.style.transition = 'transform 1s';
    this.element.style.transform = `translate(${direction * window.innerWidth}px, ${this.#offsetY}px) rotate(${90 * direction}deg)`;
    this.element.classList.add('dismissing');
    setTimeout(() => {
      this.element.remove();
    },1000);

    if (typeof this.onDismiss === 'function') {
      this.onDismiss();
    }
  }
  }

  const swiper = document.querySelector('#swiper');
  const urls = [
    '/Rectangle 240.png',
    '/Rectangle 241.png',
    '/Rectangle 242.png',
    '/Rectangle233.png',
    '/Rectangle234.png',
  ]

  let cardCount = 0;


  function appendNewCard() {
    const card = new Card({imageUrl:urls[cardCount],
    onDismiss: appendNewCard});
    // card.element.style.setProperty('--i', cardCount % 5);
    swiper.append(card.element);
    cardCount++;  
    
    const cards = swiper.querySelectorAll('.card:not(.dismissing)');
    cards.forEach((card, i) => {
      card.style.setProperty('--i', i);
    })
  }

  for(let i=0; i < 3; i++){
    appendNewCard();
  }
  }, [])
  return (
    <main className="pt-28 md:pt-40 mx-4 z-0 overflow-hidden">
      <div className="md:px-40 md:flex md:flex-col md:gap-12">
    <h1 className="text-center  font-clashDisplay font-medium text-[2.285rem] leading-[3.429rem] text-[#333333] md:font-semibold md:text-[5.714rem] md:leading-[8.93rem] ">Photography is poetry and beautiful untold stories</h1>
    <p className="md:px-36 text-center  font-Satoshi text-[#292929] leading-[1.786rem] text-twelve font-medium md:leading-[3.142rem] md:text-size">Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.</p>
    </div>

    <div id="swiper"> </div>
    {/* <div className="md:flex gap-5 overflow-hidden hidden ">
    <div className="slider"></div>
    <div className="slider1"></div>
    <div className="slider1"></div>
    <div className="slider1"></div>
    <div className="slider1"></div>

    </div> */}
    <HeroAnimation/>

    </main>
    
  )
}

export default Hero