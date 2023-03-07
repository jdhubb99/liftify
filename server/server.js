import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import workoutRouter from './routes/workouts.js';

dotenv.config();
const app = express();

let corsOptions = {
  origin: `http://localhost:5173`,
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// simple route
app.use('/api/workouts', workoutRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
