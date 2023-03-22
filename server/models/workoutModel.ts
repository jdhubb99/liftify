import { Schema, model } from 'mongoose';

interface IWorkout {
  title: string;
  reps: number;
  weight: number;
}

const workoutSchema = new Schema<IWorkout>(
  {
    title: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Workout = model<IWorkout>('Workout', workoutSchema);
