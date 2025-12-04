import 'dotenv/config.js';
import express from 'express';
import { connectDB } from './db/db.js';

import allRoutesInfo  from './routes/allRoutesInfo.js';
import fetchRoutes from './routes/fetchRoutes.js';
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;


connectDB();

app.use('/', allRoutesInfo); 
app.use('/fetch-data', fetchRoutes);
app.use('/posts', postRoutes);
app.use('/users', userRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
