import express from 'express';
import connect from './server.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import routes from './routes/index.js';
const app = express();

connect()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`lisrening to port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("mongodb connection failed");
})



app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true
}));


app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use('/v1', routes)




