import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config()


const app = express();
const PORT = process.env.PORT
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.json({ message: "Backend is working!" });
});

console.log(`Server is running on port:${PORT}`);
app.listen(PORT);