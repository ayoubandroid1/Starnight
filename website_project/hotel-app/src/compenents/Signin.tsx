import React from 'react'
import Navbar1 from './Navbar1'
import "../compenents/Signin.css"
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import * as apiClient from "../api/api-client"
import { useAppContext } from '../context/AppContext'

export type SigninFormData = {
  email : string ;
  password : string ; 
}
function Signin() {
  const location = useLocation();
  const queryClient = useQueryClient();
  const {showToast} = useAppContext();
  const navigate = useNavigate();
  const {register , formState:{errors} , handleSubmit} = useForm<SigninFormData>();
  const mutation = useMutation(apiClient.signIn , {
    onSuccess :async () => {
      showToast({message : "Sign in Successful" , type : "SUCCESS"});
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");

    } , onError: (error:Error)=>{
      showToast({message : error.message , type : "ERROR"});
    }
  })

  const onsubmit = handleSubmit((data)=>{
    mutation.mutate(data)
  })
  return (
    <div style={{ height: '100vh', width: '100vh' }}>

      <form onSubmit={onsubmit}>
                        <div>
                            <Navbar1></Navbar1>
                        </div>
                        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#799ce0_1px,transparent_1px)] [background-size:16px_16px]" >
                        </div>
                        <div className="form flex h-screen w-screen items-center overflow-hidden px-2">
                <div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
                    <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
                    <div className="mx-auto mb-2 space-y-3">
                    <h1 className="text-center text-3xl font-bold text-gray-700">Sign in</h1>
                    <p className="text-gray-500">Sign in to access your account</p>
                    </div>

                    <div>
                    <div className="relative mt-2 w-full">
                        <input type="text" id="email" className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " {...register("email" , {required : "this field is required"})}/>
                        <label htmlFor="email" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Enter Your Email </label>
                        {errors.email && (
                    <span className='text-red-500'>{errors.email.message}
                    </span>
                  )}
                    </div>
                    </div>

                    <div>
                    <div className="relative mt-2 w-full">
                        <input type="password" id="password" className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " {...register("password" , {required : "this field is required" , minLength : {
                        value : 6 ,
                        message : "Password must be at least 6 characters"
                      }})} />
                        <label htmlFor="password" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Enter Your Password</label>
                        {errors.password && (
                    <span className='text-red-500'>{errors.password.message}
                    </span>
                  )}
                    </div>
                    </div>
                    <div className="flex w-full items-center">
                    <button className="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white">Login</button>
                    <a className="w-full text-center text-sm font-medium text-gray-600 hover:underline" href="#">Forgot your password?</a>
                    </div>
                    <p className="text-center text-gray-600">
                    Don't have an account?
                    <NavLink to="/signup" className="whitespace-nowrap font-semibold text-gray-900 hover:underline">Sign up</NavLink>
                    </p>
  </div>
</div>
</form>
        </div>
  )
}

export default Signin