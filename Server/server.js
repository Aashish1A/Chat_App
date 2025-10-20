import express from 'express';
import "dotenv/config";
import cors from 'cors';
import mongoose from 'mongoose';
import http from 'http';
import { connectDB } from './lib/db.js';
import userRouter from './routes/userRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import {Server} from 'socket.io';

// create Express app and HTTP server
const app = express();
const server = http.createServer(app);

// Initialize Socket.io server
export const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT"]
    }
});

// Store online users
export const userSocketMap = {}; // userId: socketId

// Socket.io connection handler
io.on("connection", (socket) => {
  const { userId } = socket.handshake.query.userId;
  console.log("User Connected", userId);

  if(userId) {
    userSocketMap[userId] = socket.id;
  }

  // Emit online users to all connected users
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("User Disconnected", userId);
    if(userId) {
      delete userSocketMap[userId];
    }
    // Emit updated online users to all connected users
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

// middleware
app.use(cors());
app.use(express.json({ limit: '4mb' }));

// connect to MongoDB
await connectDB();

// Routes setup
app.use("/api/status", (req,res)=> res.send("Server is running"));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
