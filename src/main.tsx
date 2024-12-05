"use client";
import React, { useState, useEffect, useRef, useCallback, } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import { FocusCards } from './ui/cardsGrid'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Power3 } from "gsap";


// ```import img1 from "../public/main_imgs/unnamed1.jpg"```
// ```import img2 from "../public/main_imgs/unnamed2.jpg"```

gsap.registerPlugin(ScrollTrigger);


export default function Main() {



  const [cardsArray, setCardsArray] = useState([]);
  let AnimationTimeout;
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  const cardsRef = useRef([]); 

 
    
    const handleMouseMoveSecondSection = (event) => {
      const { clientX, clientY } = event;

      cardsRef.current.forEach((card, index) => {
        const delay = index * 0.1; 
        gsap.to(card, {
          x: clientX - card.offsetWidth / 2,
          y: clientY - card.offsetHeight / 2,
          duration: 0.5,
          delay,
          ease: "power3.out",
        });
      });
    };





  function handleMouseleaveSecondSection() { setCardsArray([]); }

  const animateCards = useGSAP(() => {

    gsap.to(".activeTrailing", {

      scale: 0.54,
      duration: 0.5,
      opacity: 0,
      y: 1000,
      stagger: .025

    })

  })



  useEffect(() => {
    const locoScroll = new LocomotiveScroll()
    return () => locoScroll.destroy();
  })


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

  const secondSection = useRef(null);
  const createH1 = useRef(null);
  const drawH1 = useRef(null);
  const liveH1 = useRef(null);
  const mihikaH1 = useRef(null);
  const imgTrailCardContainer = useRef(null);

  useGSAP(() => {

    gsap.from([createH1.current, drawH1.current, liveH1.current], {
      y: -50,// Translate on the x-axis
      stagger: 0.5, // Adds a delay between each element's animation
      duration: 3,

      ease: Power3.easeIn,
      scrollTrigger: {
        trigger: secondSection.current,
        scrub: true,
        start: "top bottom",
        end: "bottom center",

      }
    });

    gsap.to(mihikaH1.current, {
      scale: 0.7,
      duration: 1,


      scrollTrigger: {
        trigger: mihikaH1.current,
        scrub: true,
        start: "top bottom",
        end: "bottom center",


      }


    })
  })



  return (
    <div data-scroll-container>
      <div className="flex flex-col justify-center min-h-screen">
        <h1
          ref={mihikaH1}
          className="floral text-[2.5rem] md:text-[4rem] text-center lg:text-[6rem] xl:text-[8rem] font-bold text-[#FBF0DA] ">
          Mihika Arts
        </h1>
        <p className="classy max-w-4xl mx-auto sm:text-base md:text-lg lg:text-xl mt-8 font-semibold  tracking-wide dark:text-neutral-200">
          Explore a curated collection of art that captures imagination and creativity. Each piece tells a story, inviting you to experience beauty in every stroke.
        </p>
      </div>

      <div ref={secondSection} className="absolute w-full flex flex-col justify-center items-start p-[3rem] min-h-screen">

        <div ref={imgTrailCardContainer} className="imgTrailCardContainer">
          
        {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="card"
          ref={(el) => (cardsRef.current[index] = el)} // Store refs to each card
        />
      ))}
       
        </div>


        <h1
          onMouseMove={handleMouseMoveSecondSection}
          onMouseLeave={handleMouseleaveSecondSection}
          ref={createH1}
          className=" w-full text-left classy font-extrabold text-[1.5rem] md:text-[2rem] lg:text-[5rem]  text-[#FBF0DA]">
          I <span className="floral">Create</span> Art
        </h1>
        <h1
          onMouseMove={handleMouseMoveSecondSection}
          onMouseLeave={handleMouseleaveSecondSection}
          ref={drawH1}
          className="classy w-full text-left font-extrabold text-[1.5rem] md:text-[2rem] lg:text-[5rem]  text-[#FBF0DA]">
          I <span className="floral">Draw</span> Life in Colors
        </h1>
        <h1
          onMouseMove={handleMouseMoveSecondSection}
          onMouseLeave={handleMouseleaveSecondSection}
          ref={liveH1}
          className="classy w-full text-left font-extrabold text-[1.5rem] md:text-[2rem] lg:text-[5rem]  text-[#FBF0DA]"
        >
          I <span className="floral">Live</span> Through Art
        </h1>
      </div>




    </div>
  );
}
