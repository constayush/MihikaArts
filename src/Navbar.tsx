import React from 'react'
import logo from '../public/logo.png'


function Navbar() {

    return (
        <nav className='fixed top-0  z-[99]  w-screen flex justify-center items-center '>
            <div className='navbar-short flex items-center justify-center  mt-[2rem]  bg-[#90909056] p-2  rounded-lg'>
                <ul className=' flex gap-4 justify-center items-center p-2  mx-[2rem]'>
                    <li className='nav-links'>Home</li>
                    <li className='nav-links'>Contact</li>
                    <li className='nav-links'>Cart</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar