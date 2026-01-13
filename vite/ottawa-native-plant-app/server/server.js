import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js';
import mongoose from 'mongoose';
// import authRoute from './routes/AuthRoute.js'
import routes from './routes/index.js'

dotenv.config();

//Connect to database
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
// app.use("/", authRoute)
app.use(routes)
app.use(cookieParser())

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));