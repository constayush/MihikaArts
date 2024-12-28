import  React,{ useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { div } from 'framer-motion/client'
import ShopItem from '../ui/ShopItem'
import { Artworks_Images_Array } from '../constants'
import { Link } from 'react-router-dom'

function Shop() {

  const locoScrollRef = useRef(null);
  // useEffect(() => {

  //   locoScrollRef.current = new LocomotiveScroll({
  //     el: document.querySelector("[data-scroll-container]"),
  //     smooth: true,
  //   });

  //   return () => {

  //     locoScrollRef.current ? locoScrollRef.current.destroy() : null;
  //   };
  // }, []);

  return (
    <div className='flex flex-col justify-center items-center w-full mt-[10rem]'>

      <h1 className='floral text-[2rem] md:text-[5rem] tracking-widest'>Exhibit</h1>

      <div className='shop-grid columns-1 md:columns-2 lg:columns-3  '>

        {
          Artworks_Images_Array.map((artwork, index) => {
            return <Link to={`/product/${artwork.title}`} key={index}><ShopItem key={index} height={artwork.height} title={artwork.title} img={artwork.src} /></Link>
          }) //we'll do this later
        }



      </div>

    </div>
  )
}

export default Shop