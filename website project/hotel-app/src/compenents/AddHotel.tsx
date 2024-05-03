import React from 'react'
import ManageHotelForm from '../forms/ManageHotelForm/ManageHotelForm'
import Navbar1 from './Navbar1'
import TypeSection from '../forms/ManageHotelForm/TypeSection'
import { useAppContext } from '../context/AppContext';
import { useMutation } from 'react-query';
import * as apiClient from "../api/api-client"

function AddHotel() {
  const { showToast } = useAppContext();

  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({ message: "Hotel Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error Saving Hotel", type: "ERROR" });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };
  return (
    <div>
        <Navbar1></Navbar1>
    <ManageHotelForm onSave={handleSave} isLoading={isLoading}/>
    </div>
  )
}

export default AddHotel