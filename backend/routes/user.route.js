import {Router} from 'express';
import productRoute from "../middleware/productRoute.js";
import {getUsers} from "../controller/user.controller.js";

const router = Router();

router.get('/', productRoute, getUsers)

export default router;