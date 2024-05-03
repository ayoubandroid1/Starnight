import React from 'react'
import Navbar1 from './Navbar1'
import "../compenents/Signup.css"
import logo from "../assets/logo svg.svg"
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import * as apiClient from "../api/api-client"
import { useAppContext } from '../context/AppContext'
import Toasts from './Toasts'
export type RegisterFormData = {
    username : string,
    email : string,
    password : string,
    confirmPassword : string,
}
function Signup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {showToast} = useAppContext();  
    const {register , watch , handleSubmit , formState : {errors}} = useForm<RegisterFormData>();

    const mutation = useMutation(apiClient.register , {
        onSuccess : async () =>{
            showToast({message : "Registration Success !", type : "SUCCESS"});
            await queryClient.invalidateQueries("validateToken");
            navigate("/");
        },
        onError : (error:Error) =>{
            showToast({message : error.message, type:"ERROR"});
            navigate("/");
        },
    });

    const onSubmit = handleSubmit((data) =>{
        mutation.mutate(data);
    })
  return (
    <div style={{ height: '100vh', width: '100vh' }}>
                        <div>
                            <Navbar1></Navbar1>
                        </div>
                        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#799ce0_1px,transparent_1px)] [background-size:16px_16px]" >
                        </div>

  <div className="signup flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="star flex items-center mb-6 text-2xl font-semibold text-black-900 dark:text-black">
          STAR NIGHT    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
              <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Username</label>
                      <input type="username"  id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" {...register("username" , {required : "this field is required"})} />
                  {errors.username && (
                    <span className='text-red-500'>{errors.username.message}
                    </span>
                  )}
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                      <input type="email"  id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" {...register("email" , {required : "this field is required"})} />
                      {errors.email && (
                    <span className='text-red-500'>{errors.email.message}
                    </span>
                  )}
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                      <input type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("password" , {required : "this field is required" , minLength : {
                        value : 6 ,
                        message : "Password must be at least 6 characters"
                      }})}/>
                 {errors.password && (
                    <span className='text-red-500'>{errors.password.message}
                    </span>
                  )}
                  </div>
                  <div>
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm password</label>
                      <input type="password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("confirmPassword" , {validate : (val)=> {
                        if (!val){
                            return "this field is required"
                        } else if (watch("password") !== val ) {
                            return "Your passwords do not match"
                        }
                      }})}/>
                  {errors.confirmPassword && (
                    <span className='text-red-500'>{errors.confirmPassword.message}
                    </span>
                  )}
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <NavLink to="/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</NavLink>
                  </p>
              </form>
          </div>
      </div>
  </div>



</div>


  )
}

export default Signup

function showToast(arg0: { message: string; type: string }) {
  throw new Error()
}
