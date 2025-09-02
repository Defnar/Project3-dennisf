import e from "express";
const router = e.Router();

//api/
router.use("/users")
router.use("/projects")
router.use("/tasks");

export default router;
