import dotenv from 'dotenv'
dotenv.config();
import express from 'express'

// console.log("JWT_SECRET from .env:", process.env.JWT_SECRET);

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongoDb from './db/connectToDB.js'
import { app, server } from './socket/socket.js';
import cookieParser from 'cookie-parser';
import cors from "cors";



const PORT  = process.env.PORT || 5000

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json())
app.use(cookieParser()) 
app.use("/api/auth" , authRoutes)
app.use("/api/message" , messageRoutes) 
app.use("/api/user" , userRoutes) 


server.listen(PORT, () => {
  connectToMongoDb()
  console.log(`Server is running on http://localhost:${PORT}`)
  
})