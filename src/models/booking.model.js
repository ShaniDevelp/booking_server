import mongoose, { Schema } from "mongoose";

const BookingSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        room: {
            type: Schema.Types.ObjectId,
            ref: "Room"
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
    },
    {

        timeseries: true
    }
);

export const Booking = mongoose.model("Booking", BookingSchema);