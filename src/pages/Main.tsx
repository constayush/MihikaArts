"use client";
import React, { useState, useEffect, useRef, useCallback, } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import { CardsGrid } from '../ui/cardsGrid'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Power3, Power1 } from "gsap";
import { easeIn } from "framer-motion/dom";
import SplitType from 'split-type'
import Navbar from "../ui/Navbar";
gsap.registerPlugin(ScrollTrigger);


export default function Main() {

  const locoScrollRef = useRef(null);
  const heroImg = useRef(null);
  const mihikaH1 = useRef(null);
  const h1ContainerLeft = useRef(null);
  const h1ContainerRight = useRef(null);
  const gridSection = useRef(null);
  const heroSection = useRef(null);
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
  
  // let typeSplit = new SplitType('.floral', {
  //   types: 'lines, words, chars',
  //   tagName: 'span'
    
  // })

  useEffect(() => {

    locoScrollRef.current = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => {

      locoScrollRef.current ? locoScrollRef.current.destroy() : null;
    };
  }, []);

  useGSAP(() => {

    //Page-loding-animations

    gsap.from(heroImg.current, {

      ease: easeIn,
      height: "5vh",
      opacity: 0,
      duration: 1,

    });

    gsap.from([".hero-p", ".hero-h1"], {


      stagger: 0.2,
      ease: easeIn,
      opacity: 0,
      filter: "blur(15px)",
      color: "transparent",
      duration: .8,

    });

  

  })

  useGSAP(() => {

    gsap.to(heroImg.current, {

      ease: easeIn,
      scale: .75,
      border: "3px #FBF0DA solid",

      duration: 1,
      scrollTrigger: {

        trigger: heroImg.current,
        start: "bottom center",
        end: "bottom top",
        scrub: true

      }
    })

    // gsap.from(typeSplit.lines, {
    //   y: '100%',
    //   opacity: 0,
    //   duration: 0.5,
    //   ease: 'power1.out',
    //   stagger: 0.1,
      
    //   scrollTrigger: {
    //     trigger: '.floral',
    //     start: 'top bottom',
    //     scrub: true
    //   }
    // })


  })

  return (
    <div >



      <div ref={heroSection} className="flex flex-col  justify-center itmes-center min-h-screen">

        <div ref={heroImg} className="hero-img h-full w-[100%] absolute z-[-1] bg-cover overflow-x-hidden"></div>

        <h1
          ref={mihikaH1}
          className="hero-h1 hero-elems bg-shadow floral text-[2.5rem] md:text-[4rem] text-center lg:text-[6rem] xl:text-[8rem] font-bold z-[1] ">
          Mihika Arts
        </h1>

        <p
          className="hero-p hero-elems bg-shadow backdrop-blur-[1px] text-center classy max-w-4xl mx-auto sm:text-base md:text-lg lg:text-xxl mt-8 font-bold  tracking-wider z-[1]">
          Explore a curated collection of art that captures imagination and creativity. Each piece tells a story, inviting you to experience beauty in every stroke.
        </p>

      </div>

      <div
        className="
      h1Section flex flex-col md:flex-row justify-center md:justify-between items-center md:p-8 min-h-[85vh] md:min-h-[95vh]
      text-[2rem] md:text-[2rem] lg:text-[5rem]
      p-2 gap-3
      ">

        <div ref={h1ContainerLeft}>
          <h1 

            className=" w-full text-left classy font-extrabold animate-text-on-scroll ">
            I <span animate-text className="floral">Create</span> Art
          </h1>

          <h1

            className="classy w-full text-left font-extrabold  ">
            I <span className="floral">Draw</span> Life in Colors
          </h1>

          <h1

            className="classy w-full text-left font-extrabold "
          >
            I <span className="floral">Live</span> Through Art
          </h1>
        </div>

        <div ref={h1ContainerRight}>


          <h1

            className=" w-full text-right classy font-extrabold  ">
            Art that <span className="floral">Move</span>
          </h1>
          <h1

            className=" w-full text-right classy font-extrabold  ">
            Art that <span className="floral">Inspires</span>
          </h1>
          <h1

            className=" w-full text-right classy font-extrabold  ">
            Art that <span className="floral">Transform</span>
          </h1>

        </div>

      </div>

      <CardsGrid cards={cards} /> 
     

    </div>

  );

}







