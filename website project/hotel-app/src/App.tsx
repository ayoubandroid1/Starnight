import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './compenents/Navbar';
import Section1 from './compenents/Section1';
import Section2 from './compenents/Section2';
import Section3 from './compenents/Section3';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Section4 from './compenents/Section4';
import AddHotel from './compenents/AddHotel';
import { useAppContext } from './context/AppContext';
import Navbar1 from './compenents/Navbar1';
import MyHotels from './compenents/MyHotels';
import EditHotel from './compenents/EditHotel';
import Booking from './compenents/Booking';


function App() {
  const {isLoggedIn} = useAppContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Navbar'element={<Navbar/>} />
          <Route path="/Section1" element={<Section1 />} />
          <Route path="/Section2" element={<Section2 />} />
          <Route path="/Section3" element={<Section3 />} />
          <Route path="/Section4" element={<Section4 />} />
          {isLoggedIn && (
            <>
          <Route path='/add-hotel' element={
            <AddHotel/>} />
            <Route path='/my-hotels' element={
              <MyHotels/>} />
              <Route path='/edit-hotel/:hotelId' element={
              <EditHotel/>} />
              <Route path='/hotel/:hotelId/booking' element={
              <Booking/>} />
              </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
