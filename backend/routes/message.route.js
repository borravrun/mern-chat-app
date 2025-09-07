import {Router} from "express";
import {getMessages, sendMessage} from "../controller/message.controller.js";
import productRoute from "../middleware/productRoute.js";

const router = Router()

router.get("/:id", productRoute, getMessages)
router.post("/send/:id", productRoute, sendMessage)

export default router;