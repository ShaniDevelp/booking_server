import { Room } from "../models/room.model.js";
import { ApiError } from "../utilis/apiError.js";
import { asyncHandler } from "../utilis/asyncHandler.js";

const addRoom = asyncHandler(async(req, res) => {
    const {number, description} = req.body

    console.log(req.body)

    if(!number){
        throw new ApiError(400, "Number is Required")
    }

    const room = await Room.create(req.body)

    return res.status(200).json(room)
});

const getAllRooms = asyncHandler(async(req, res) => {
    
    const rooms = await Room.find({})

    return res.status(200).json(rooms)
});
const roomController = {
    addRoom,
    getAllRooms
};

export default roomController