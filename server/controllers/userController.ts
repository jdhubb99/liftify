import { Request, Response } from 'express';
import { User } from '../models/userModel.js';

// login user
export const userLogin = async (req: Request, res: Response) => {
  res.json({ mssg: 'login' });
};

// signup user
export const userSignUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.signUp(email, password);
    res.status(201).json({ user });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
