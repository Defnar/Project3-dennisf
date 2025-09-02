import e from "express";
import { logIn, register } from "../controllers/userControllers.js";
const router = e.Router();

//users/register
router.post("/register", logIn)

//users/login
router.post("/login", register);

export default router;