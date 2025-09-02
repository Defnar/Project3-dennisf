import e from "express";
import taskControllers from "../controllers/taskControllers.js";
const router = e.Router();

//api/projects/:id/tasks/

router.post("/", taskControllers.createTask);
router.get("/", taskControllers.getTasks);


export default router;