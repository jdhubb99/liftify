import express, { Express, Request } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import router from './routes/exercises.js';

dotenv.config();
const app: Express = express();

// middleware
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// simple route
app.use('/api/exercises', router);

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
