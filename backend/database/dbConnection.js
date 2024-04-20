import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL 
    )
    .then(() => {
      console.log("Connected to database.");
      //console.log(process.env.MONGO_URL);
    })
    .catch((err) => {
      console.log(`Some Error occurred. ${err}`);
    });
};
