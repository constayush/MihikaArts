import React from 'react'
import bgTexture from '../../public/contactTexture.jpg'
function Contact() {
  return (
    <div className='contact-page  flex flex-col justify-center items-center min-w-screen mt-[10rem] '>

<div className='contact-page-img absolute w-full h-full z-[-1] '></div>
      <h1 className='floral text-[5rem] tracking-wider'>Contact</h1>


      <div className='max-w-[60%] text-left '>
        <p className=' text-lg mt-8'>
          Welcome to Mihika Arts! We’re thrilled to connect with art enthusiasts, collectors, and admirers like you. Whether you have questions, inquiries, or simply want to share your thoughts about our collection, we’d love to hear from you.</p>

        <p className='mt-8 pb-8'>
          
          <span className=' underline underline-offset-4 font-semibold mb-8'>Get in Touch</span><br />

          Phone: <span className=' font-semibold blur-[3px] hover:blur-0 hover:'>+91 9720103445</span><br />
          Email: <span className=' font-semibold'>mihikaarts@gmail.com</span><br />
          Social Media:<br />
          </p>
      </div>

    </div>
  )
}

export default Contact