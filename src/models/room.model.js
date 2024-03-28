import mongoose, { Schema } from "mongoose";

const RoomSchema = new Schema(
    {
        number: {
            type: Number,
            required: true,
            unique: true
        },
        image: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: false
        },
        pricePerNight: {
            type: Number,
            required: false
        },
        available: {
            type: Boolean,
            required: false
        }
    },
    {
        timestamps: true
    }
);

export const Room = mongoose.model("Room", RoomSchema);