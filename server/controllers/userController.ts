import { Request, Response } from 'express';
import { User } from '../models/userModel.js';

// login user
export const userLogin = async (req: Request, res: Response) => {
  res.json({ mssg: 'login' });
};

// signup user
export const userSignUp = async (req: Request, res: Response) => {
  res.json({ mssg: 'signup' });
};
