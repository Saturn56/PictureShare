import { Router } from "express";
import {AuthController} from "../controllers/AuthController"


const router = Router();
// Login route
router.get("/login", AuthController.login);

export default router;