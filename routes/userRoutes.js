import e from "express";
import userControllers from "../controllers/userControllers.js";
const router = e.Router();

//users/register
router.post("/register", userControllers.logIn)

//users/login
router.post("/login", userControllers.register);

export default router;