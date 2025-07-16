import express from "express";
import cors from "cors";

import { sequelize } from "./models/index.js"
import authRoutes from './routes/authRoutes.js'
import 'dotenv/config';

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
 
);

app.use(express.json())

// app.get('/', (req, res) => {
//   res.json({ message: "Backend is working!" });
// });

// Routes
app.use('/api/auth' , authRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    database: sequelize.authenticate ? 'connected' : 'disconnected'
  });
});

// test database connection
sequelize.authenticate()
  .then(() => console.log('Database Connected'))
  .catch(err => console.error('Database connection error:' , err));

  sequelize.sync({ alter: true }) // Use { force: true } to drop tables and recreate
  .then(() => console.log('Models synced'))
  .catch(err => console.error('Model sync error:', err));




const PORT = process.env.PORT
console.log(`Server is running on port:${PORT}`);

app.listen(PORT);