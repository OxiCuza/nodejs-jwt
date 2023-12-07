import { Router } from "express";
import AuthController from "../controllers/auth-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const authRouter = Router()
const NewAuthController = new AuthController()

authRouter.post('/login', NewAuthController.login)
authRouter.get('/dashboard', authMiddleware, NewAuthController.dashboard)

export default authRouter