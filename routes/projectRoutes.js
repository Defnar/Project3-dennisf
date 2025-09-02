import e from "express";
import { authMiddleware } from "../auth/auth.js";
import projectControllers from "../controllers/projectControllers.js";
import { authEditMiddleware, checkProjectMiddleware } from "../auth/middleware.js";
const router = e.Router();

//api/projects
//authenticate everything here
router.use(authMiddleware);

router.post("/", projectControllers.newProject);
router.get("/", projectControllers.getAllProjects);

//authorize users to interact with projects based on ids
router.use("/:id", authEditMiddleware);

//ensure project is authorized
router.use("/id", checkProjectMiddleware);

router.get("/:id", projectControllers.getProject);
router.put("/:id", )
