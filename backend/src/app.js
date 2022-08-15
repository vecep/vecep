import express from 'express';
import cors from 'cors';
import router from './api/routes/index.js';
import mongoose from 'mongoose';
import 'dotenv/config.js';
import { defaultHandler, errorHandler } from './api/middlewares/index.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ limit: '1050mb', extended: true }));
app.use(cors());
app.use(router);
app.use(defaultHandler);
app.use(errorHandler);

mongoose.connect(`${process.env.MONGO_URL}/${process.env.MONGO_DB_NAME}`, {
	useNewUrlParser: true
});

export default app;
