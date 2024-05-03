import { button } from '@material-tailwind/react'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import * as apiClient from "../api/api-client"
import { useAppContext } from '../context/AppContext'
import "../compenents/Navbar1.css"

function SignOutButton() {
    const queryClient = useQueryClient();
    const {showToast} = useAppContext();
    const mutation = useMutation(apiClient.signOut , {
        onSuccess : async ()=>{
            await queryClient.invalidateQueries("validateToken");
            showToast({message : "Signed Out " , type : "SUCCESS"});
        } , 
        onError : (error:Error) => {
            showToast({message : error.message , type : "ERROR"})
        }
    });

    const handleClick = () => {
        mutation.mutate();
    }
  return (
    <button onClick={handleClick} className=''>Sign out</button>
  )
}

export default SignOutButton