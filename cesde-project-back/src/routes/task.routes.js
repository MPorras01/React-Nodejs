import { Router } from "express";
import { autRequired } from "../middleware/validateToken.js";

const router = Router();


router.get('/task', autRequired, (req, res) => res.send('task'))


export default router;