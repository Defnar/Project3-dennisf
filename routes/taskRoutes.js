import e from "express";
import { authPostMiddleware, checkMiddlewareAuth } from "../auth/middleware.js";
import controller from "../controllers/controller.js";
import { Task } from "../models/Task.js";
const router = e.Router();

//api/projects/:id/tasks/:taskid

router.post("/", controller.create(Task, "project"));
router.get("/", controller.getAll(Task, "project"));

//check for authorization
router.use("/:taskId", authPostMiddleware(Task, "project"));

//ensure authorization
router.use("/:taskId", checkMiddlewareAuth(Task));

//api/projects/:projectid/tasks/:taskid
router.get("/:taskId", controller.getOne(Task));
router.put("/:taskId", controller.edit(Task));
router.delete("/:taskId", controller.deleteOne(Task));

export default router;
