import { Router } from 'express';
import {
  createExercise,
  getAllExercises,
  getExerciseById,
  deleteExerciseById,
  updateExerciseById,
} from '../controllers/exerciseController.js';
const router = Router();

// GET all exercises
router.get('/', getAllExercises);

// GET a single exercise
router.get('/:id', getExerciseById);

// POST a new exercise
router.post('/', createExercise);

// DELETE an exercise
router.delete('/:id', deleteExerciseById);

// UPDATE an exercise
router.patch('/:id', updateExerciseById);

export default router;
