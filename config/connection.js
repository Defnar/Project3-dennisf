import mongoose from "mongoose";
const uri = process.env.MONGO_URI;

await mongoose.connect(uri);

export const db =  mongoose.connection;