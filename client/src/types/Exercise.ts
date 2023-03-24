import { type Dispatch } from 'react';
export interface Exercise {
  _id?: number;
  name: string;
  reps: number;
  weight: number;
  createdAt?: string;
  updatedAt?: string;
}
