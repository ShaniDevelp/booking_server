import mongoose from "mongoose";

const connect = async() => {
    try{
        const connection = await mongoose.connect(process.env.DB_CONNECTION_STRING);
        if(connection){
            console.log(`database connected successfull`)
        }
        

    } catch(error) {
        console.log(error)
    }
};

export default connect;