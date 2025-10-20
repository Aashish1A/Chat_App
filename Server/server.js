import express from 'express';
import "dotenv/config";
import cors from 'cors';
import mongoose from 'mongoose';
import http from 'http';

// create Express app and HTTP server
const app = express();
const server = http.createServer(app);

// middleware
app.use(cors());
app.use(express.json({ limit: '4mb' }));

app.use("/api/status", (req,res)=> res.send("Server is running"));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
