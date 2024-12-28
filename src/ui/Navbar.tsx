import React from 'react'
import logo from '../public/logo.png'
import gsap from 'gsap'
import { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { NavLink } from 'react-router-dom'
import { Power1 } from 'gsap'
function Navbar() {
    let isDarkMode;
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {

            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {

                gsap.to('.navbar-short', { y: -200, duration: .5, ease: Power1 });
            } else {

                gsap.to('.navbar-short', { y: 0, duration: .65, ease: Power1 });

            }

            lastScrollY = currentScrollY;

        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useGSAP(() => {
        gsap.from('.navbar-short', {
            backgroundColor: '#ffd582',
            opacity: 0,
            y: -100,
            ease: Power1,
            duration: 1,

        })




        gsap.to('.navbar-short', {

            top: -100,
            scrollTrigger: {
                trigger: '.navbar-short',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })


    })

    return (
        <nav className='fixed top-0 z-[99] mt-[2rem]   w-full flex justify-center items-center '>

            <div className='navbar-short flex items-center justify-center   bg-[#90909056]  rounded-lg'>

                <ul className=' flex gap-2 md:gap-4 justify-center items-center p-4  '>

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
                        to="/contact-us">Contact</NavLink>

                    <button
                        onClick={() => {
                            isDarkMode = !isDarkMode
                            document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light';
                        }}
                        className='border'>theme
                    </button>

                </ul>

            </div>
            
        </nav>
    )
}

export default Navbar