import React from 'react'
import logo from '../public/logo.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { NavLink } from 'react-router-dom'
import { Power1 } from 'gsap'
function Navbar() {
    useGSAP(() => {
        gsap.from('.navbar-short', {
            backgroundColor: '#ffd582',
            opacity: 0,
            y: -100,
            ease: Power1,
            duration: 1,

        })
    })

    return (
        <nav className='fixed top-0  z-[99]  w-screen flex justify-center items-center '>
            <div className='navbar-short flex items-center justify-center  mt-[2rem]  bg-[#90909056] p-2  rounded-lg'>
                <ul className=' flex gap-4 justify-center items-center p-2  mx-[2rem]'>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'nav-links active-link' : 'nav-links inactive-link'
                        }
                        to="/"     >Home   </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'nav-links active-link' : 'nav-links inactive-link'
                        }
                        to="/Shop" >Shop   </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'nav-links active-link' : 'nav-links inactive-link'
                        }
                        to="/Cart" >Cart   </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'nav-links active-link' : 'nav-links inactive-link'
                        }
                        to="/contact-us">Contact</NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar