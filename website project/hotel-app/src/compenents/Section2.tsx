import React from 'react';
import "./Section2.css";
import brush from "../assets/green brushes.png";
import brush1 from "../assets/red brushes.png";
import stadium from "../assets/stadium.jpg"
import CarouselTransition from "../compenents/CarouselTransition"
import flag from "../assets/flag.png"
function Section2() {
  return (
    <div className='section2'>
        <div className='brushes'>
            <img className='green_brush' src={brush} alt='green brush'></img>
            <img className='red_brush' src={brush1} alt='green brush'></img>
        </div>
        <h1 className='can'>CAN2025</h1>
        <p className='welcome_paragraph'>Welcome to our website where you can find the perfect and the closest places to the complexes where the CUP OF AFRICA will be played in .. We are offering the most comfortable stay in hotels and unforgettable nights with CAN 2025 🇲🇦 .. in RABAT , CASABLANCA , MARRAKECH , FES , AGADIR , TANGER ..  Ones of the biggest cities in Morocco There you’ll spend your best nights with your teams making unforgettable memories for life ..⚽</p>
    <CarouselTransition></CarouselTransition>
    </div>
  );
}

export default Section2;
