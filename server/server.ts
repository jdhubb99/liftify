import express, { Express, Request } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import exerciseRoutes from './routes/exercises.js';
import userRoutes from './routes/users.js';

dotenv.config();
const app: Express = express();

// middleware
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// routes
app.use('/api/exercises', exerciseRoutes);
app.use('/api/user', userRoutes);

// connect to DB
const port = process.env.PORT || 4000;
connect(process.env.MONGO_URI as string)
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
