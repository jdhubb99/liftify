import { Exercise } from '../models/exerciseModel.js';
import { Types } from 'mongoose';
import type { Request, Response } from 'express';

// get all exercises
export const getAllExercises = async (req: Request, res: Response) => {
  try {
    // sort exercises by date created in descending order
    const exercises = await Exercise.find().sort({ createdAt: -1 });
    res.status(200).json(exercises);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// get a single exercise
export const getExerciseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Exercise not found' });
  }

  try {
    const exercise = await Exercise.findById(id);
    if (!exercise) {
      return res.status(404).json({ error: 'Exercise not found' });
    }
    res.status(200).json(exercise);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// create an exercise
export const createExercise = async (req: Request, res: Response) => {
  const { name, reps, weight } = req.body;

  // adds a new exercise doc to the database
  try {
    const exercise = await Exercise.create({ name, reps, weight });
    res.status(200).json(exercise);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// delete an exercise
export const deleteExerciseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Exercise not found' });
  }

  try {
    const exercise = await Exercise.findByIdAndDelete(id);
    if (!exercise) {
      return res.status(404).json({ error: 'Exercise not found' });
    }
    res
      .status(200)
      .json({ exercise: exercise, message: 'Exercise deleted successfully' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// update an exercise
export const updateExerciseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Exercise not found' });
  }

  try {
    const exercise = await Exercise.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    if (!exercise) {
      return res.status(404).json({ error: 'Exercise not found' });
    }
    res
      .status(200)
      .json({ exercise: exercise, message: 'Exercise updated successfully' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
