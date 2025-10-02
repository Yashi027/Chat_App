import express from 'express';
import { connectdb } from './config/db.js';
import userRouter from './routes/userRoute.js';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();


const app=express()
const port = 3000

app.use(express.json())
app.use(cors())
connectdb();
app.use("/api/user",userRouter)


app.get("/",(req,res) => {
    res.send("API Working");
})

app.listen(port , () => {
    console.log(`Server Started on port:${port}`);
})