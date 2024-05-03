import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Section1 from './compenents/Section1';
import Contactus from './compenents/Contactus';
import Signin from './compenents/Signin';
import Signup from './compenents/Signup';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContextProvider } from './context/AppContext';
import AddHotel from './compenents/AddHotel';
import MyHotels from './compenents/MyHotels';
import EditHotel from './compenents/EditHotel';
import { SearchContextProvider } from './context/SearchContext';
import SearchHotel from './compenents/SearchHotel';
import Detail from './compenents/Details';
import Booking from './compenents/Booking';
import MyBooking from './compenents/MyBooking';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Section1/>,
  },

  {
    path: "/contactus",
    element: <Contactus/>,
  },
  
  {
    path: "/signin",
    element: <Signin/>,
  },

  {
    path: "/signup",
    element: <Signup/>,
  },
  
  {
    path: "/add-hotel",
    element: <AddHotel/>,
  },

  {
    path: "/my-hotels",
    element: <MyHotels/>,
  },
  
  {
    path: "/edit-hotel/:hotelId",
    element: <EditHotel/>,
  },

  {
    path: "/search",
    element: <SearchHotel/>,
  },

  {
    path: "/detail/:hotelId",
    element: <Detail/>,
  },

  {
    path: "/hotel/:hotelId/booking",
    element: <Booking/>,
  },

  {
    path: "/my-bookings",
    element: <MyBooking/>,
  },
  
]);
const queryClient = new QueryClient({
  defaultOptions : {
    queries : {
      retry : 0,
    }
  }
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client= {queryClient}>
      <AppContextProvider>
        <SearchContextProvider>
    <RouterProvider router={router} />
    </SearchContextProvider>
    </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
