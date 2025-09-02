import e from "express";
import { authMiddleware } from "../auth/auth.js";
import projectControllers from "../controllers/projectControllers.js";
import {
  authEditMiddleware,
  checkProjectMiddleware,
} from "../auth/middleware.js";
const router = e.Router();

//api/projects
//authenticate everything here
router.use(authMiddleware);

router.post("/", projectControllers.newProject);
router.get("/", projectControllers.getAllProjects);

//authorize users to interact with projects based on ids
router.use("/:projectId", authEditMiddleware);

//ensure project is authorized
router.use("/:projectId", checkProjectMiddleware);

router.get("/:projectId", projectControllers.getProject);
router.put("/:projectId", projectControllers.editProject);
router.delete("/:projectId", projectControllers.deleteProject);

//path to tasks if specified
router.use("/:id/tasks", )

export default router;
