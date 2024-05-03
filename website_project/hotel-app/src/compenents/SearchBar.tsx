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

function SearchBar() {
  return (
    <div>  <div className='dates_picker'>
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
    
    </div></div>
  )
}

export default SearchBar