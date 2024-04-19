import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'


const app = express();
dotenv.config({path: "./config/config.env"})

// to connect backend to frontend

app.use(cors({
  origin: "http://localhost:5173",
  credentials:true
}))


//app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//app.use('/api/v1/user', userRouter);


///dbConnection();


export default app;