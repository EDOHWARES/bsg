import express from 'express';
import cors from 'cors';
import userRouter from './routers/userRouter.js';
import connectDB from './config/db.js';

const app = express();
const port = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send('API IS WORKING...');
});

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});

// mongodb+srv://edohemmanuel4real:bsgdatabase@cluster0.ywlay.mongodb.net/?retryWrites=true&w=majority&appName=bsg