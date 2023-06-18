import express from 'express';
import { loginUser, registerUser } from '../controllers/userControllers.js';

const router = express.Router();

//register newUser

router.post('/register-user', registerUser);


//login user
router.post('/login-user', loginUser);



export default router;
