import React from 'react'
import { useFormContext } from 'react-hook-form';
import { HotelFormData } from './ManageHotelForm';
import "../ManageHotelForm/GuestsSection.css"

function GuestsSection() {
    const {
        register,
        formState: { errors },
      } = useFormContext<HotelFormData>();
  return (
    <div className='guests'>
        <div className=''>
        <h1 className="title mt-6 text-xl font-bold sm:mb-6 sm:text-3xl">Guests</h1>
        </div>
        <div className="guests1 grid grid-cols-2 p-6 gap-5 bg-blue-300">
        <label className="text-gray-700 text-sm font-semibold">
          Adults
          <input
            className="border rounded w-full py-2 px-3 font-normal"
            type="number"
            min={1}
            {...register("adultCount", {
              required: "This field is required",
            })}
          />
          {errors.adultCount?.message && (
            <span className="text-red-500 text-sm fold-bold">
              {errors.adultCount?.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-semibold">
          Children
          <input
            className="border rounded w-full py-2 px-3 font-normal"
            type="number"
            min={0}
            {...register("childCount", {
              required: "This field is required",
            })}
          />
          {errors.childCount?.message && (
            <span className="text-red-500 text-sm fold-bold">
              {errors.childCount?.message}
            </span>
          )}
        </label>
      </div>
    </div>
  )
}

export default GuestsSection