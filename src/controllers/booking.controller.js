import { Booking } from "../models/booking.model.js";
import { ApiError } from "../utilis/apiError.js";
import { asyncHandler } from "../utilis/asyncHandler.js";

const addBooking = asyncHandler(async(req, res) => {
    const {user, room, startDate, endDate} = req.body

    console.log(req.body)

    if(
        [user, room, startDate, endDate].some((field) => field.trim() === "")
    ){
        throw new ApiError(400, "All Fields required")
    }

    const booking = await Booking.create(req.body)

    return res.status(200).json(booking)

});

const updateBooking = asyncHandler(async(req, res) => {
    const id = req.params.id
    const {room, startDate, endDate, hours} = req.body

    console.log(req.body)

    const booking = await Booking.findByIdAndUpdate(
        id,
        {
            $set:{
                room: room,
                startDate: startDate,
                endDate: endDate,
            }
        },
        {
            new: true
        }
    )

    return res.status(200).json(booking)

});

const getUserBooking = asyncHandler(async(req, res) => {

    const {id} = req.params
    console.log(req.params)
    
    const booking = await Booking.find({user: id}).populate("room")

    if(!booking){
        throw new ApiError(400, 'no bookings found')
    }

    return res.status(200).json(booking)

});

const bookingController = {
    addBooking,
    updateBooking,
    getUserBooking
};

export default bookingController