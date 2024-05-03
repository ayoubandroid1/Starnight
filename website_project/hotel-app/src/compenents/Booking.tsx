import React, { useEffect, useState } from 'react'
import Navbar1 from './Navbar1'
import { useAppContext } from '../context/AppContext';
import { useSearchContext } from '../context/SearchContext';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import * as apiClient from "../api/api-client"
import BookingForm from './BookingForm';

function Booking() {
  const search = useSearchContext();
  const { hotelId } = useParams();

  const [numberOfNights, setNumberOfNights] = useState<number>(0);

  useEffect(() => {
    if (search.checkIn && search.checkOut) {
      const nights =
        Math.abs(search.checkOut.getTime() - search.checkIn.getTime()) /
        (1000 * 60 * 60 * 24);

      setNumberOfNights(Math.ceil(nights));
    }
  }, [search.checkIn, search.checkOut]);

  const { data: hotel } = useQuery(
    "fetchHotelByID",
    () => apiClient.fetchHotelById(hotelId as string),
    {
      enabled: !!hotelId,
    }
  );


  if (!hotel) {
    return <></>;
  }


  
  
  return (
    <form>
    <div>
        <Navbar1></Navbar1>

        <div className="">
          <BookingForm checkIn={search.checkIn}
        checkOut={search.checkOut}
        adultCount={search.adultCount}
        childCount={search.childCount}
        numberOfNights={numberOfNights}
        hotel={hotel}/>
    </div>
    </div>
    </form>
  )
}

export default Booking