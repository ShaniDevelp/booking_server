import { User } from "../models/user.model.js";
import { ApiError } from "../utilis/apiError.js";
import { asyncHandler } from "../utilis/asyncHandler.js";


const createUser = asyncHandler(async(req, res, next) => {
    
    const {userName, email, password } = req.body

    if(
        [userName, email, password].some((field) => field?.trim() === "")
    ){
        
        return res.status(400).send('All fields are expected')
    }

    const existedUser = await User.findOne({$or : [{ email }, {userName}]});

    if(existedUser){
        return res.status(400).send('user already exist')
    }

    const user = await User.create(req.body)

    const createdUser = await User.findById(user._id).select("-password")

    if(!createdUser){
        return res.status(400).send('error registering user')
    }
    
    return res.json(createdUser)
});


const loginUser = asyncHandler(async(req, res, next)=> {
    const {email, password} = req.body

    if(
        [email, password].some((field) => field?.trim() === "")
    ){
        throw new ApiError(400, 'All fields are requitred')
    }

    const user = await User.findOne({email});

    if(!user){
        return res.status(400).send('User does not exist')
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password)

    if(!isPasswordCorrect){
        return res.status(400).send('wrong credentials')
    }

    const loggedInUser = await User.findById(user._id).select("-password")

    return res.status(200).json(loggedInUser)
})

const UserController = {
    createUser,
    loginUser
};

export default UserController