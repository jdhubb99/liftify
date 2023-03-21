import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import workoutRouter from './routes/workouts.js';

dotenv.config();
const app = express();

const corsOptions = {
  origin: 'http://127.0.0.1:5173',
};

// middleware
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// simple route
app.use('/api/workouts', workoutRouter);

// connect to DB
const port = process.env.PORT || 4000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Connected to DB & server is running on: http://localhost:${port}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
