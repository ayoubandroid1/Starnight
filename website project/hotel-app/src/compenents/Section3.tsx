import React from 'react';
import "./section3.css";
import quotes from "../assets/quotes.svg"
import {motion} from "framer-motion"
import flag from "../assets/FLAG 3D.png"
import { duration } from '@mui/material';

function Section3() {
  return (
    <div
    className='section3' style={{ height: '100vh', width: '100vh' }}>
        <div className='discover_morocco'>
        <h1 className='discover'>DISCOVER  <h1 className='morocco'>MOROCCO</h1> </h1>
        </div>
        <motion.h1
        initial={{
          x:"100vw",
          opacity:0,
        }}
        animate={{x:0}}
        transition={{
          duration:2,
        }}
        whileInView={{
          opacity:1,
        }}
        viewport={{
          margin:"-200px",
          once:true,
        }}
         className='welcome_animated'>Welcome</motion.h1>
        <motion.div
        initial={{
          opacity:0,
        }}
        whileInView={{
          opacity:1,
        }}
        viewport={{
          margin:"-200px",
          once:true,
        }}
        animate={{
          y:20}
        }
        className='flag_top'><img className='flag_top_img' src={flag}></img> </motion.div>
        <div className='image-container'>
            <img className='img_qts' src={quotes} ></img>
                    </div>
                    <div className='para_morocco'>
                    <p className='para_morocco1'>Discovering Morocco is an enchanting journey that unfolds like a tapestry of vibrant colors, rich history, and diverse landscapes. From the bustling medinas of cities like Marrakech and Fez, where ancient traditions blend seamlessly with modern life, to the tranquil beauty of the Sahara Desert’s golden dunes, every corner of Morocco offers a unique experience. Visitors can wander through maze-like alleyways adorned with intricate tilework, savor the tantalizing aromas of spices in bustling souks, or trek through the rugged Atlas Mountains, encountering Berber villages nestled amidst breathtaking scenery. Whether exploring the timeless allure of historic landmarks like the Kasbah of Ait Ben Haddou or immersing oneself in the lively rhythms of Gnawa music, discovering Morocco is a captivating odyssey that leaves a lasting impression on all who venture into its magical embrace.</p>
                    <h1 className='tag'>STAR NIGHT</h1>
                    </div>
        <motion.h1
        initial={{
          x:"-100vw",
          opacity:0,
        }}
        animate={{x:0}}
        transition={{
          duration:3,
        }}
        whileInView={{
          opacity:1,
        }}
        viewport={{
          margin:"-20px",
          once:true,
        }}
        className='welcome_animated_ar'>مرحبا</motion.h1>
        <motion.div 
        initial={{
          opacity:0,
        }}
        whileInView={{
          opacity:1,
        }}
        viewport={{
          margin:"-20px",
          once:true,
        }}
        animate={{y:-2}}
        className='flag_top'><img className='flag_down_img' src={flag}></img> </motion.div>

    </div>
  );
}

export default Section3;
