import mongoose from "mongoose";
const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(console.log("database succesfully connected"))
  .catch((err) => console.log(err));

const db = mongoose.connection;

db.on("error", () => console.log(error))

export default db;