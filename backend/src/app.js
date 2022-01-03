import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ limit: '1050mb', extended: true }));
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true
});

export default app;
