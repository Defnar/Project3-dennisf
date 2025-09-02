import "dotenv/config";
import e from "express";
import { db } from "./config/connection.js";

const app = e();


app.use(e.json());
app.use("/api/")