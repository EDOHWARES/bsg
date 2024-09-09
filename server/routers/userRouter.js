import express from 'express';
import { registerUser, verifyEmail, loginUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/verifyEmail', verifyEmail);

export default userRouter;