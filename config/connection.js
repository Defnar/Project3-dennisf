import mongoose from "mongoose";
const uri = process.env.MONGO_URI;

await mongoose.connect(uri)
.then(console.log("database succesfully connected"))
.catch(err => console.log(err));

export const db =  mongoose.connection;