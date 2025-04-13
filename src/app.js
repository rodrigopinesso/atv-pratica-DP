import express from 'express';
import cors from 'cors';
import connectDB from './database/mongo.js';
import personagemRoutes from './routes/personagem.routes.js';
import itemRoutes from './routes/item.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/personagens', personagemRoutes);
app.use('/itens', itemRoutes);

export default app;
