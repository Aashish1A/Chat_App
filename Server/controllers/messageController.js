import Message from "../models/Message.js";
import User from "../models/User.js";
import cloudinary from "../lib/cloudinary.js";
import {io, userSocketMap} from "../server.js";


// Get all users except the current user
export const getUsersForSidebar = async (req, res) => {
    try {
        const userId = req.user._id;
        const filteredUsers = await User.find({_id: { $ne: userId }}).select("-password");

        // Count number of unread messages from each user
        const unSeenMessages = {};
        const promises = filteredUsers.map(async (user) => {
            const messages = await Message.find({ senderId: user._id, receiverId: userId, seen: false });
            if(messages.length > 0) {
                unSeenMessages[user._id] = messages.length;
            } 
        });

        await Promise.all(promises);

        res.status(200).json({users: filteredUsers, unSeenMessages});
    } catch (error) {
        console.error("Error fetching users for sidebar:", error);
        res.status(500).json({error: error.message});
    }
}

// Get all messages for selected user
export const getMessages = async (req, res) => {
    try {
        const {id: selectedUserId} = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or: [
                { senderId: myId, receiverId: selectedUserId },
                { senderId: selectedUserId, receiverId: myId }
            ]
        })

        await Message.updateMany(
            { senderId: selectedUserId, receiverId: myId },
            { seen: true }
        );

        res.status(200).json({ messages });
    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({ error: error.message });
    }
}

// Api to mark messages as seen using message id
export const markMessagesAsSeen = async (req, res) => {
    try {
        const { id } = req.params;
        await Message.findByIdAndUpdate(id, { seen: true });

        res.status(200).json({ message: "Messages marked as seen" });
    } catch (error) {
        console.error("Error marking messages as seen:", error);
        res.status(500).json({ error: error.message });
    }
}

// Send message to selected user
export const sendMessage = async (req, res) => {
    try {
        const {text, image} = req.body;
        const receiverId = req.params.id;
        const senderId = req.user._id;

        let imageUrl;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = await Message.create({
            text,
            image: imageUrl,
            senderId,
            receiverId
        });

        // Emit the new message to the receiver if they are online
        const receiverSocketId = userSocketMap[receiverId];
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json({ message: newMessage });
    } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).json({ error: error.message });
    }
}