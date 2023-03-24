import { Schema, model } from 'mongoose';

interface IExercise {
  name: string;
  reps: number;
  weight: number;
}

const exerciseSchema = new Schema<IExercise>(
  {
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Exercise = model<IExercise>('Exercise', exerciseSchema);
