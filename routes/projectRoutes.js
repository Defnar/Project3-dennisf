import e from "express";
import { authMiddleware } from "../auth/auth.js";
import { newProject } from "../controllers/projectControllers.js";
const router = e.Router();

//api/projects
//authenticate everything here
router.use(authMiddleware);

router.post("/", newProject)