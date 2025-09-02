import e from "express";
import taskControllers from "../controllers/taskControllers.js";
import { checkTaskMidleware, taskMiddleware } from "../auth/middleware.js";
const router = e.Router();

//api/projects/:id/tasks/:taskid

router.post("/", taskControllers.createTask);
router.get("/", taskControllers.getAllTasks);

//check for authorization
router.use("/:taskId", taskMiddleware);

//ensure authorization
router.use("/:taskId", checkTaskMidleware)

//api/projects/:projectid/tasks/:taskid
router.get("/:taskId", taskControllers.getTask)


export default router;