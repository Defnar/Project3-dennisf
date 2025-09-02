import e from "express";
import { authMiddleware } from "../auth/auth.js";
import projectControllers from "../controllers/projectControllers.js";
import {
  projectMiddleware,
  checkProjectMiddleware,
} from "../auth/middleware.js";
import controller from "../controllers/controller.js";
import taskRoutes from "./taskRoutes.js";
import { Project } from "../models/Project.js";
const router = e.Router();

//api/projects
//authenticate everything here
router.use(authMiddleware);

router.post("/", controller.create(Project));
router.get("/", controller.getAll(Project));

//authorize users to interact with projects based on ids
router.use("/:projectId", projectMiddleware);

//ensure project is authorized
router.use("/:projectId", checkProjectMiddleware);

//api/projects/projectId
router.get("/:projectId", controller.getOne(Project));
router.put("/:projectId", controller.edit(Project));
router.delete("/:projectId", controller.deleteOne(Project));

//path to tasks if specified
router.use("/:projectId/tasks", taskRoutes)

export default router;
