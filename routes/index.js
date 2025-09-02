import e from "express";
const router = e.Router();
import userRoutes from "userRoutes.js"

//api/
router.use("/users")
router.use("/projects")
router.use("/tasks");
