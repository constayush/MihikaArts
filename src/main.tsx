"use client";
import React, { useState, useEffect, useRef, useCallback, } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import { FocusCards } from './ui/cardsGrid'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Power3 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
const locoScroll = new LocomotiveScroll()
 

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


  useGSAP(() => {


    gsap.to(heroImg.current, {
      scale: 2,
      top: -100,
      scrollTrigger: {
        trigger: heroImg.current,
        start: "top top",
        end: "bottom top",
        scrub: true,

      },


    })


  })

  

  const heroImg = useRef(null);
  const secondSection = useRef(null);
  const createH1 = useRef(null);
  const drawH1 = useRef(null);
  const liveH1 = useRef(null);
  const mihikaH1 = useRef(null);
  const imgTrailCardContainer = useRef(null);



  return (
    <div data-scroll-container>



      <div className="flex flex-col  justify-center itmes-center min-h-screen">

        <div ref={heroImg} className="hero-img h-[80vh] w-[100%] absolute z-[-1] bg-cover"></div>
        <h1
          ref={mihikaH1}
          className="bg-shadow floral text-[2.5rem] md:text-[4rem] text-center lg:text-[6rem] xl:text-[8rem] font-bold z-[1] ">
          Mihika Arts
        </h1>

        <p className="bg-shadow backdrop-blur-[1px] text-center classy max-w-4xl mx-auto sm:text-base md:text-lg lg:text-xxl mt-8 font-bold  tracking-wider z-[1]">
          Explore a curated collection of art that captures imagination and creativity. Each piece tells a story, inviting you to experience beauty in every stroke.
        </p>

      </div>

      <div className="flex flex-col justify-center items-center p-8 min-h-screen">

        <h1
          ref={createH1}
          className=" w-full text-left classy font-extrabold text-[1.5rem] md:text-[2rem] lg:text-[5rem] ">
          I <span className="floral">Create</span> Art
        </h1>

        <h1
          ref={drawH1}
          className="classy w-full text-left font-extrabold text-[1.5rem] md:text-[2rem] lg:text-[5rem] ">
          I <span className="floral">Draw</span> Life in Colors
        </h1>

        <h1
          ref={liveH1}
          className="classy w-full text-left font-extrabold text-[1.5rem] md:text-[2rem] lg:text-[5rem] "
        >
          I <span className="floral">Live</span> Through Art
        </h1>

      </div>

      <FocusCards cards={cards} />


    </div>


  );
}
