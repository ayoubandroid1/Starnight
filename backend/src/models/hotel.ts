import mongoose from "mongoose";
import { BookingType } from "../shared/types";


const bookingSchema = new mongoose.Schema<BookingType>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    adultCount: { type: Number, required: true },
    childCount: { type: Number, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    userId: { type: String, required: true },
    totalCost: { type: Number, required: true },
  });

  
export type HotelType = {
    _id : string ;
    userId : string ; 
    name : string ;
    city : string ;
    country : string ;
    description : string ;
    type : string ;
    adultCount : number ;
    childCount : number ;
    facilities : string[];
    pricePerNight : number ;
    starRating : number ;
    imageUrls : string[];
    lastUpdated : Date;
    bookings: BookingType[];

}

const hotelSchema = new mongoose.Schema<HotelType>({
    userId : {type : String , required : true},
    name : {type : String , required : true},
    city : {type : String , required : true},
    country : {type : String , required : true},
    description : {type : String , required : true},
    type : {type : String , required : true},
    adultCount : {type : Number , required : true},
    childCount : {type : Number , required : true},
    facilities : [{type : String , required : true}],
    pricePerNight : {type : Number , required : true},
    starRating : {type : Number , required : true},
    imageUrls : [{type : String , required : true}],
    lastUpdated : {type : Date , required : true},
})

const Hotel = mongoose.model<HotelType>("Hotel" , hotelSchema);
export default Hotel;