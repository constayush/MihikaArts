"use client"; 
import React, { useState, useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import {FocusCards} from './ui/cardsGrid'
const scroll = new LocomotiveScroll();

const cards = [
  {
    title: "Forest Adventure",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Valley of life",
    src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Sala behta hi jayega",
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Camping is for pros",
    src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The road not taken",
    src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The First Rule",
    src: "https://assets.aceternity.com/the-first-rule.png",
  },
 
];

export default function Main() {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);



  return (
    <>
      <div className="flex flex-col justify-center min-h-screen">
        <h1
     
        
        className="floral text-[2.5rem] md:text-[4rem] lg:text-[6rem] xl:text-[8rem] font-bold text-[#FBF0DA] text-center">
          Mihika Arts
        </h1>
        <p className="classy max-w-4xl mx-auto sm:text-base md:text-lg lg:text-xl mt-8 font-semibold text-center tracking-wide dark:text-neutral-200">
          Explore a curated collection of art that captures imagination and creativity. Each piece tells a story, inviting you to experience beauty in every stroke.
        </p>
      </div>

      <div className="flex flex-col justify-center items-start p-[3rem] min-h-screen">
        <h1 className="classy font-extrabold text-[1.5rem] md:text-[2rem] lg:text-[5rem] text-center text-[#FBF0DA]">
          I <span className="floral">Create</span> Art
        </h1>
        <h1 className="classy font-extrabold text-[1.5rem] md:text-[2rem] lg:text-[5rem] text-center text-[#FBF0DA]">
          I <span className="floral">Draw</span> Life in Colors
        </h1>
        <h1
         
          className="classy font-extrabold text-[1.5rem] md:text-[2rem] lg:text-[5rem] text-center text-[#FBF0DA]"
        >
          I <span className="floral">Live</span> Through Art
        </h1>
      </div>

     
  
      <FocusCards cards={cards} />
    </>
  );
}
