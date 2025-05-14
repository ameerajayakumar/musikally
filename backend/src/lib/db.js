import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB: ', db.connection.host);
  } catch (error) {
    console.log('Failed to connect to Mongo database', error);
    process.exit(1); // failure - 1, success - 0
  }
};
