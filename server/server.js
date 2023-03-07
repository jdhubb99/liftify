import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

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
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the application.' });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});
