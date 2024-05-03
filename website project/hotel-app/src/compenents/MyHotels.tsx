import React from 'react'
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api/api-client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";
import Navbar1 from './Navbar1';
import "../compenents/myhotel.css"

function MyHotels() {
    const { data: hotelData } = useQuery(
        "fetchMyHotels",
        apiClient.fetchMyHotels,
        {
          onError: () => {},
        }
      );
    
      if (!hotelData) {
        return <span>No Hotels found</span>;
      }
    
  return (
    <div className='myhotel'>
        <Navbar1></Navbar1>
    <div className="space-y-5 flex flex-col items-center">
      <span className="flex justify-between">
        <h1 className="text-3xl font-bold">My Hotels</h1>
      </span>
      <div className='link'>
      <Link
          to="/add-hotel"
          className="focus:ring outline-none rounded-lg text-white bg-indigo-600 px-4 py-2 font-bold  shadow-md border-b-4 border-indigo-300  atransition aduration-100 active:scale-95 hover:translate-y-0.5 hover:bg-blue-500"
        >
          Add Hotel
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {hotelData.map((hotel) => (
          <div
            data-testid="hotel-card"
            className="flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5"
          >
            <h2 className="text-2xl font-bold">{hotel.name}</h2>
            <div className="whitespace-pre-line">{hotel.description}</div>
            <div className="grid grid-cols-5 gap-2">
              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <BsMap className="mr-1" />
                {hotel.city}, {hotel.country}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <BsBuilding className="mr-1" />
                {hotel.type}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <BiMoney className="mr-1" />${hotel.pricePerNight} per night
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <BiHotel className="mr-1" />
                {hotel.adultCount} adults, {hotel.childCount} children
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <BiStar className="mr-1" />
                {hotel.starRating} Star Rating
              </div>
            </div>
            <span className="flex justify-end">
              <Link
                to={`/edit-hotel/${hotel._id}`}
                className="focus:ring outline-none rounded-lg text-white bg-blue-600 px-8 py-2 font-bold active:scale-95 hover:opacity-90"
              >
                View Details
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default MyHotels