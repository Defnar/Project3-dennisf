import e from "express";
import taskControllers from "../controllers/taskControllers.js";
import { taskMiddleware } from "../auth/middleware.js";
const router = e.Router();

//api/projects/:id/tasks/

router.post("/", taskControllers.createTask);
router.get("/", taskControllers.getTasks);

router.use(taskMiddleware);

export default router;