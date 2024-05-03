import React from 'react'
import { hotelFacilities } from '../../config/hotel-options-config'
import { useFormContext } from 'react-hook-form';
import { HotelFormData } from './ManageHotelForm';
import "../ManageHotelForm/FacilitiesSection.css"

function FacitilitiesSection() {
    const {
        register,
        formState: { errors },
      } = useFormContext<HotelFormData>();
    
  return (
    <div className='facilities'>
        <div>
        <h1 className="title mt-6 text-xl font-bold sm:mb-6 sm:text-3xl">Facilities</h1>

        </div>
        <div className="facilities1 grid grid-cols-5 gap-3">
        {hotelFacilities.map((facility) => (
          <label className="text-sm flex gap-1 text-gray-700">
            <input
              type="checkbox"
              value={facility}
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "At least one facility is required";
                  }
                },
              })}
            />
            {facility}
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-red-500 text-sm font-bold">
          {errors.facilities.message}
        </span>
      )}
    </div>
  )
}

export default FacitilitiesSection