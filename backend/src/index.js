import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log('Server is running at port:', PORT);
});
