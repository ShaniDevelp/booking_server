import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';
import validator from "validator";


const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true,
            unique:true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('Email is invaluid')
                }
            }
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);


UserSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

UserSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}


export const User = mongoose.model('User', UserSchema);