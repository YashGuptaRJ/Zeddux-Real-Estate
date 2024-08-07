
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

mongoose.set('strictQuery', false); // Setting strictQuery to false to suppress the warning

mongoose.connect("mongodb+srv://2021cs49ya:sahand@zeddux-real.bjjd9pl.mongodb.net/?retryWrites=true&w=majority&appName=Zeddux-Real")  // Use environment variable for MongoDB URI
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.json());  // Middleware to parse JSON bodies

app.use(cookieParser());  // Middleware to parse cookies

app.use('/api/user', userRouter);  // User routes
app.use('/api/auth', authRouter);  // Auth routes
app.use('/api/listing', listingRouter);  // Listing routes

app.use(express.static(path.join(__dirname, '/client/dist')));  // Serve static files from client/dist

app.get('*', (req, res) => {  // Catch-all route for client-side routing
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {  // Error handling middleware
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});














/*import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

mongoose.connect("mongodb+srv://2021cs49ya:sahand@zeddux-real.bjjd9pl.mongodb.net/?retryWrites=true&w=majority&appName=Zeddux-Real")
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

  const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
*/