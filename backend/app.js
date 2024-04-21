// Import necessary modules
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRouter.js'
import { dbConnection } from './database/dbConnection.js';

const app = express();
dotenv.config({ path: "./config/config.env" });

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/user', userRouter); // Mount userRouter at '/api/v1/user'

dbConnection();

export default app;
