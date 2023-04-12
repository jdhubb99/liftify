import { Router } from 'express';
import { userLogin, userSignUp } from '../controllers/userController.js';

const router = Router();

// Login route
router.post('/login', userLogin);

// Signup route
router.post('/signup', userSignUp);

export default router;
