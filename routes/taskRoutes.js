import e from "express";
import taskControllers from "../controllers/taskControllers.js";
import { checkTaskMidleware, taskMiddleware } from "../auth/middleware.js";
import controller from "../controllers/controller.js";
import { Task } from "../models/Task.js";
const router = e.Router();

//api/projects/:id/tasks/:taskid

router.post("/", controller.create(Task));
router.get("/", controller.getAll(Task));

//check for authorization
router.use("/:taskId", taskMiddleware);

//ensure authorization
router.use("/:taskId", checkTaskMidleware);

//api/projects/:projectid/tasks/:taskid
router.get("/:taskId", controller.getOne(Task));
router.put("/:taskId", controller.edit(Task));
router.delete("/:taskId", controller.deleteOne(Task));

export default router;
