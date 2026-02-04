
import dotenv from "dotenv"

dotenv.config();


import express from "express"
const app=express();
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import userRoute from "./routes/user.route.js";
import listingRouter from "./routes/listing.route.js";
import bookingRouter from "./routes/booking.route.js";
import aiRoute from "./routes/aiRoute.js";



const port=process.env.PORT||6000;
app.use(cors({
    origin:"https://airbnb-frontend-per2.onrender.com", 
    credentials:true
}))

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/user",userRoute)
app.use("/api/listing",listingRouter)
app.use("/api/booking",bookingRouter)
app.use("/api/ai", aiRoute)






app.listen(port,()=>{
    connectDB();
    console.log("Server is running on the port "+port);
});
