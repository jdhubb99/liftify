import { Workout } from '../models/workoutModel.js';
import mongoose from 'mongoose';

// get all workouts
export const getAllWorkouts = async (req, res) => {
  try {
    // sort workouts by date created in descending order
    const workouts = await Workout.find().sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a single workout
export const getWorkoutById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Workout not found' });
  }

  try {
    const workout = await Workout.findById(id);
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// create a workout
export const createWorkout = async (req, res) => {
  const { title, reps, weight } = req.body;

  // adds a new workout doc to the database
  try {
    const workout = await Workout.create({ title, reps, weight });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
export const deleteWorkoutById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Workout not found' });
  }

  try {
    const workout = await Workout.findByIdAndDelete(id);
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(200).json({ workout, message: 'Workout deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a workout
export const updateWorkoutById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
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
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
