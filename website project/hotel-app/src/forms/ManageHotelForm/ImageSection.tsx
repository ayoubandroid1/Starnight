import React from 'react'
import { useFormContext } from 'react-hook-form';
import { HotelFormData } from './ManageHotelForm';
import "../ManageHotelForm/ImageSection1.css"

function ImageSection() {
    const {
        register,
        formState: { errors },
        watch,
        setValue,
      } = useFormContext<HotelFormData>();
    
      const existingImageUrls = watch("imageUrls");
    
      const handleDelete = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        imageUrl: string
      ) => {
        event.preventDefault();
        setValue(
          "imageUrls",
          existingImageUrls.filter((url) => url !== imageUrl)
        );
      };
  return (
    <div className='image'>
        <div>
        <h1 className="title mt-6 text-xl font-bold sm:mb-6 sm:text-3xl">Images</h1>
        </div>
        <div className="image1 border rounded p-4 flex flex-col gap-4">
        {existingImageUrls && (
          <div className="grid grid-cols-6 gap-4">
            {existingImageUrls.map((url) => (
              <div className="relative group">
                <img src={url} className="min-h-full object-cover" />
                <button
                  onClick={(event) => handleDelete(event, url)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full text-gray-700 font-normal"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totalLength =
                imageFiles.length + (existingImageUrls?.length || 0);

              if (totalLength === 0) {
                return "At least one image should be added";
              }

              if (totalLength > 6) {
                return "Total number of images cannot be more than 6";
              }

              return true;
            },
          })}
        />
      </div>
      {errors.imageFiles && (
        <span className="text-red-500 text-sm font-bold">
          {errors.imageFiles.message}
        </span>
      )}
    </div>
  )
}

export default ImageSection