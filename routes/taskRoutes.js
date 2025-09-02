import e from "express";
import taskControllers from "../controllers/taskControllers.js";
const router = e.Router();

//api/projects/:id/tasks/

router.post("/", taskControllers.createTask);



export default router;