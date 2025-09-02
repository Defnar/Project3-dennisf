import e from "express";
import userControllers from "../controllers/userControllers.js";
const router = e.Router();

//users/register
router.post("/register", userControllers.register)

//users/login
router.post("/login", userControllers.logIn);

export default router;