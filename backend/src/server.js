import express from "express"
import dotenv from "dotenv"
dotenv.config();
import cookieParser from "cookie-parser"

import router from "./routes/auth.routes.js"
import {connectDB} from "./lib/db.js"
import User from "./models/User.js";

const app=express();
const PORT= process.env.PORT

// we need many things from the user in object form so 
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/chat",chatRoutes)


app.listen(PORT,()=>{
    console.log(`server is runnning on port ${PORT}`)
    connectDB()
})

