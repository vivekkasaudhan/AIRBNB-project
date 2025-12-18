import express from "express"
const app=express();
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"
dotenv.config();
const port=process.env.PORT||6000;
app.use(cors({
    origin:"http://localhost:5173", 
    credentials:true
}))

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)






app.listen(port,()=>{
    connectDB();
    console.log("Server is running on the port "+port);
});