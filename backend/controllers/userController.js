import { catchAsyncError } from '../middlewares/catchAsyncError.js';
import ErrorHandler from '../middlewares/error.js';
import { User } from '../models/userSchema.js';
import { sendToken } from '../utils/jwtToken.js';

//checking all the feilds are present
export const register = catchAsyncError(async (req, res, next) => {
  //destructring and checking 
  const { fname, email, password, cpassword } = req.body;
  if (!fname || !email || !password || !cpassword) {
    return next(new ErrorHandler("Please fill the full registration form!"));
  }

  //already user exist with same email
  const isEmail = await User.findOne({ email });
  if (isEmail) {
    return next(new ErrorHandler('Email already exists!'));
  }

  //creaing the user 
  const user = await User.create({
    fname,
    email,
    password,
    cpassword
  });
  // console.log(user);
  //sending token
  sendToken(user, 200, res, "User Registered successfully");
});

//login func
export const login = catchAsyncError(async (req, res, next) => {
  console.log(req.body);
  const { email, password} = req.body;
  //checking all fields are filled
  if (!email || !password) {
    return next(new ErrorHandler("Please provide email, password", 400));
  }

  //finding the user with email and as select is false in schema so adding the select password
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 400));
  }

  //comparing the password
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 400));
  }

  //sending login token
  console.log(user);
  sendToken(user, 200, res, "User Login Successfull")

});

//logout func
export const logout = catchAsyncError(async ( req, res, next) =>{
  res
    .status(201)
    .cookie("token", "" , {
      httpOnly: true,
      //expiring the cookie
      expires: new Date(Date.now()),
    })
    .json({
      success:true,
      message: "User Logged Out successfully",
    });
});


export const getUser = catchAsyncError((req,res,next) =>{
  const user = req.user;
  console.log(req.user)
  res.status(200).json({
    success:true,
    user,
  });
 })

