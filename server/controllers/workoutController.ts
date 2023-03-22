import { Workout } from '../models/workoutModel.js';
import { Types } from 'mongoose';
import type { Request, Response, ErrorRequestHandler } from 'express';

// get all workouts
export const getAllWorkouts = async (req: Request, res: Response) => {
  try {
    // sort workouts by date created in descending order
    const workouts = await Workout.find().sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// get a single workout
export const getWorkoutById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Workout not found' });
  }

  try {
    const workout = await Workout.findById(id);
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(200).json(workout);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// create a workout
export const createWorkout = async (req: Request, res: Response) => {
  const { title, reps, weight } = req.body;

  // adds a new workout doc to the database
  try {
    const workout = await Workout.create({ title, reps, weight });
    res.status(200).json(workout);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
export const deleteWorkoutById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Workout not found' });
  }

  try {
    const workout = await Workout.findByIdAndDelete(id);
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(200).json({ workout, message: 'Workout deleted successfully' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// update a workout
export const updateWorkoutById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Workout not found' });
  }

  try {
    const workout = await Workout.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(200).json({ workout, message: 'Workout updated successfully' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
