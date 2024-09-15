import mongoose from "mongoose";
require("dotenv").config();

// Connect to MongoDB

const connectDatabase = async () => {
  try {
    const res = await mongoose.connect(
      (process.env.DATABASE_URL as string) || ""
    );
    console.log(`Database is connected to ${res.connection.host}`);
  } catch (error: any) {
    console.log("Error whils connecting database", error.message);
  }
};

export default connectDatabase;
