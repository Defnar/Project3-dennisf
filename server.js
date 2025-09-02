import "dotenv/config";
import e from "express";
import db from "./config/connection.js";
import index from "./routes/index.js";

const app = e();
const port = process.env.PORT || 1337;

app.use(e.json());
app.use("/api", index);

db.once("open", () => {
  app.listen(port, () =>
    console.log(`Educational Television? OH NO @ http://localhost:${port}`)
  );
});