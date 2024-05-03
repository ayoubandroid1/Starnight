import React from 'react'
import Navbar1 from './Navbar1'
import phone from "../assets/phone.svg"
import "../compenents/Contactus.css"
import { TEInput, TERipple , TETextarea } from "tw-elements-react";

function Contactus() {
  return (
    <div className='contactus' style={{ height: '100vh', width: '100vh' }}>
      <div className='Navbar11'>
      <Navbar1></Navbar1>
      </div>
      <div className='para_contactus'>
        <h1 className='contactus_h1'>CONTACT US</h1>
        <p className='contactus_p'>Step into our digital sanctuary and let's connect! Whether you have questions, ideas, or just want to say hello, we're here for you. Drop us a line and let's start a conversation. Your satisfaction is our priority, and we can't wait to hear from you!</p>

      <img className='phone' src={phone}></img>
      </div>
                        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#799ce0_1px,transparent_1px)] [background-size:16px_16px]" >
                        </div>
      <div className='input'>
  <div className="input block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 text-center items-center">
      <form>
        {/* <!--Name input--> */}
        <TEInput
          type="text"
          label="Name"
          className="w-700 mb-6"
        ></TEInput>
        {/* <!--E-mail input--> */}
        <TEInput
          type="email"
          label="Email address"
          className="mb-6"
        ></TEInput>

        {/* <!--Message textarea--> */}
        <div className="relative mb-6">
          <TETextarea
            id="exampleFormControlTextarea13"
            label="Message"
            rows={3}
          />
        </div>

        {/* <!--Submit button--> */}
        <TERipple rippleColor="light" className="w-full">
          <button
            type="button"
            className="inline-block rounded w-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            SUBMIT
          </button>
        </TERipple>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Contactus