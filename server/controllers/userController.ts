import { Request, Response } from 'express';
import { User } from '../models/userModel.js';
import jwt from 'jsonwebtoken';

// user authentication
const createToken = (_id: string) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET!, { expiresIn: '3d' });
};

// login user
export const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id as string); // auth token
    res.status(201).json({ email, token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// sign up user
export const userSignUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.signUp(email, password);
    const token = createToken(user._id as string); // auth token
    res.status(201).json({ email, token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
