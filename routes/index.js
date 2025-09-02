import e from "express";
const router = e.Router();
import userRoutes from "./userRoutes.js"
import projectRoutes from "./projectRoutes.js"

//api/
router.use("/users", userRoutes)
router.use("/projects", projectRoutes)

export default router;
