import {Router} from 'express';
import productRoute from "../middleware/productRoute.js";

const router = Router();

router.get('/', productRoute, getUsers)

export default router;