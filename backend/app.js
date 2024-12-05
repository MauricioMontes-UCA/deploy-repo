import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/tasks.routes.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

let ALLOWED_ORIGINS = [process.env.URL_1, process.env.URL_2];

app.use(cors({
    origin: ALLOWED_ORIGINS,
    credentials: true
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;