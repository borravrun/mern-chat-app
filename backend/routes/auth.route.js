import {Router} from "express";
import {Login, LogOut, SignUp} from "../controller/auth.controller.js";
import {body} from "express-validator";

const router = Router();

router.post("/login", [body('username').notEmpty(), body('password').notEmpty()],Login)
router.post("/signup", SignUp)
router.post("/logout", LogOut)

export default router;