import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const nameDB = process.env.MONGO_DB;

export const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/${nameDB}`);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
};