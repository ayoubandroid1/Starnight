import * as React from 'react'
import Navbar from './Navbar'; 
import "./Section1.css";
import logo from "../assets/MOROCCAN ARCHITECTURE.jpg";
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import { FormEvent, useState } from "react";
import { useSearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchHotel.css"

function Section1() {
        const navigate = useNavigate();
  const search = useSearchContext();

  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount
    );
    navigate("/search");
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);


  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
        
        <>
        <div>
    <div className='Section1'>
        <div className='navbar'>
                <Navbar></Navbar>
        </div>
                <img className='homapage_pic' src={logo} alt='logo'/>
                <h1 className='title_header'>Finding the perfect hotel for your stay in Morocco has never been easier...</h1>
                <h1 className='title_header1'>Check out Star Night for your next Moroccan adventure</h1>
      <div className='dates_picker'>
                <div className='destinations'> 
                <button className="button_destination" onClick={toggleModal}>
                <label className='where'>Where</label>
                <br></br>
                 <label className='search_destination'>­Search destination</label>
                 </button>
                <button className="button_checkin" onClick={toggleModal} >
                <label className='check_in_text'>Check in</label>
                <br></br>
                   <label className='add_dates'>Add dates</label>
</button>
<button className="button_checkout" onClick={toggleModal} >
<label className='check_out_text'>Check out</label>
<br></br>
        <label className='add_dates1'>Add dates</label>
</button>
<button className="button_who" onClick={toggleModal} >
<label className='who'>Who</label>
<br></br>
        <label className='add_guests'>Add guests</label>
</button>

    </div>
    
    </div>
</div>

    <div className='secondpage'>
    <Section2></Section2>
</div>
<div className='thirdpage'>
    <Section3></Section3>
</div>
<div className='fourthpage'>
    <Section4></Section4>
</div>
</div>


{modal && (
<div className='modal'>
<div className="modal-content">

    <form
      onSubmit={handleSubmit}
      className="form p-3 bg-blue-600 rounded shadow-md grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-center gap-4"
    >
      <div className="field flex flex-row items-center flex-1 bg-white p-2">
        <MdTravelExplore size={25} className="mr-2" />
        <input
          placeholder="Where are you going?"
          className="text-md w-full focus:outline-none"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <div className="field flex bg-white px-2 py-1 gap-2">
        <label className="items-center flex">
          Adults:
          <input
            className="w-full p-1 focus:outline-none font-bold"
            type="number"
            min={1}
            max={20}
            value={adultCount}
            onChange={(event) => setAdultCount(parseInt(event.target.value))}
          />
        </label>
        <label className="items-center flex">
          Children:
          <input
            className="w-full p-1 focus:outline-none font-bold"
            type="number"
            min={0}
            max={20}
            value={childCount}
            onChange={(event) => setChildCount(parseInt(event.target.value))}
          />
        </label>
      </div>
      <div>
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-in Date"
          className="field min-w-full bg-white p-2 focus:outline-none"
          wrapperClassName="min-w-full"
        />
      </div>
      <div>
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-out Date"
          className="field min-w-full bg-white p-2 focus:outline-none"
          wrapperClassName="min-w-full"
        />
      </div>
      <div className="flex gap-1">
        <button className="field search w-2/3 bg-lime-700 text-white h-full p-2 font-bold text-xl hover:bg-lime-600">
          Search
        </button>
        <button className="field w-1/3 bg-red-700 text-white h-full p-2 font-bold text-xl hover:bg-red-600" onClick={toggleModal}>
          Close
        </button>
      </div>
    </form>
    </div>
    </div>
    )}

</>
  );
}

export default Section1;
