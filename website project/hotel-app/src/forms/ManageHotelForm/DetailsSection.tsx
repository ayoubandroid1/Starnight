import React from 'react'
import "../ManageHotelForm/DetailsSection.css"
import { useFormContext } from 'react-hook-form'
import { HotelFormData } from './ManageHotelForm';

function DetailsSection() {
    const {
        register,
        formState: { errors },
      } = useFormContext<HotelFormData>();
    return (
    <div className='details'>
        <div className="">
<div className="mx-auto max-w-screen-sm px-4">
  <h1 className="title mt-6 text-xl font-bold sm:mb-6 sm:text-3xl">Add Hotel</h1>

  <div className="-ml-20 flex p-4 text-left text-gray-700">
    <div className="w-full space-y-3 text-gray-700">
      <div className="">
          <span>Name</span>
        <input type="text" placeholder="Hotel name" className="h-12 w-full max-w-full rounded-md border bg-white px-5 text-sm outline-none focus:ring" 
        {...register("name" , {required : "this field is required"})}
        />
        {errors.name && (
                    <span className='text-red-500'>{errors.name.message}
                    </span>
                  )}

      </div>
      <div className="">
      <span>City</span>
      <span className='country'>Country</span>
      <br></br>
        <input type="text" placeholder="City" className="h-12 w-80  rounded-md border bg-white px-5 text-sm outline-none focus:ring" {...register("city" , {required : "this field is required"})} />
        {errors.city && (
                    <span className='text-red-500'>{errors.city.message}
                    </span>
                  )}
        <input type="text" placeholder="Country" className="h-12 w-80  ml-2 rounded-md border bg-white px-5 text-sm outline-none focus:ring"
        {...register("country" , {required : "this field is required"})}
        />
        {errors.country && (
                    <span className='text-red-500'>{errors.country.message}
                    </span>
                  )}

      </div>
      <div className="">
      <span>Description</span>
        <textarea id="" placeholder="Write your description here" cols={30} rows={6} className="h-40 w-full min-w-full max-w-full overflow-auto whitespace-pre-wrap rounded-md border bg-white p-5 text-sm font-normal normal-case text-gray-600 opacity-100 outline-none focus:text-gray-600 focus:opacity-100 focus:ring"
        {...register("description" , {required : "this field is required"})}
        ></textarea>
        {errors.description && (
                    <span className='text-red-500'>{errors.description.message}
                    </span>
                  )}
      </div>
      <div className="">
      <span>Price Per Night</span>
      <br></br>
        <input type="number" placeholder="Price Per Night" className="h-12 w-80  rounded-md border bg-white px-5 text-sm outline-none focus:ring" 
        {...register("pricePerNight" , {required : "this field is required"})}/>
        {errors.pricePerNight && (
                    <span className='text-red-500'>{errors.pricePerNight.message}
                    </span>
                  )}
      </div>
  <div className="block w-full">
<label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-600 w-full">Star Rating</label>
<select id="countries" className="h-12 border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
{...register("starRating" , {required : "this field is required"})}>
  <option selected>Select Star Rating</option>
  <option value="2">2 Stars</option>
  <option value="3">3 Stars</option>
  <option value="4">4 Stars</option>
  <option value="5">5 Stars</option>
</select>
{errors.starRating && (
                    <span className='text-red-500'>{errors.starRating.message}
                    </span>
                  )}
</div>

    </div>
  </div>
</div>
</div>

    </div>
  )
}

export default DetailsSection