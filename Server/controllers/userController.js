import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

// Signup new user
export const signup = async (req, res) => {
    try {
        const { fullName, email, password, bio } = req.body;

        if(!fullName || !email || !password || !bio) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({ fullName, email, password: hashedPassword, bio });
        await newUser.save();

        const token = generateToken(newUser._id);

        res.status(201).json({success: true, message: "Account created successfully", user: newUser, token });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

// Login existing user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        const token = generateToken(user._id);

        res.status(200).json({success: true, message: "Login successful", user, token });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

// Controller to check if user is authenticated
export const checkAuth = async (req, res) => {
    res.json({success: true, user: req.user});
}

// Controller to update user profile details
export const updateProfile = async (req, res) => {
    try {
        const {profilePicture, bio, fullName} = req.body;

        const userId = req.user._id;
        let updatedUser;

        if(!profilePicture){
           updatedUser = await User.findByIdAndUpdate(userId, {bio, fullName}, {new: true});
        }else{
            const upload = await cloudinary.uploader.upload(profilePicture);
            updatedUser = await User.findByIdAndUpdate(userId, {bio, fullName, profilePicture: upload.secure_url}, {new: true});
        }

        res.status(200).json({ success: true, message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error updating user profile:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}