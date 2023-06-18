import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import wishRoutes from './routes/wishRoutes.js'

import { notFound } from './middleware/errorMiddleware.js';
import { errorHandler } from './middleware/errorMiddleware.js';


dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(cors());


app.use('/api/products',productRoutes)
app.use('/api/user',userRoutes)
app.use('/api/wishlist',wishRoutes)




app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));


export default app;