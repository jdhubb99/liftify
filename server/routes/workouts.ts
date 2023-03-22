import { Router } from 'express';
import {
  createWorkout,
  getAllWorkouts,
  getWorkoutById,
  deleteWorkoutById,
  updateWorkoutById,
} from '../controllers/workoutController.js';
const router = Router();

// GET all workouts
router.get('/', getAllWorkouts);

// GET a single workout
router.get('/:id', getWorkoutById);

// POST a new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkoutById);

// UPDATE a workout
router.patch('/:id', updateWorkoutById);

export default router;
