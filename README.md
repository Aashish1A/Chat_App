# 💬 Chat Wave - Real-Time Chat Application

<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.io-Real--Time-010101?style=for-the-badge&logo=socket.io&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.1.14-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</div>

<div align="center">
  <h3>A modern, real-time chat application built with the MERN stack</h3>
  <p>Connect with friends instantly with live messaging, online status indicators, and image sharing</p>
  
  <a href="https://chat-wave-one.vercel.app/" target="_blank">
    <strong>🚀 Live Demo</strong>
  </a>
</div>

---

## ✨ Features

### 🔐 **Authentication & Security**

- User registration and login with JWT authentication
- Secure password hashing with bcrypt
- Protected routes and middleware
- Persistent sessions with localStorage

### 💬 **Real-Time Messaging**

- Instant message delivery using Socket.io
- Online/offline status indicators
- Read receipts and timestamps
- Message history persistence

### 🖼️ **Media Sharing**

- Image upload and sharing
- Cloudinary integration for image storage
- Optimized image delivery

### 👤 **User Profiles**

- Customizable profile pictures
- Bio and personal information
- Profile editing functionality

### 🎨 **Modern UI/UX**

- Responsive design for all devices
- Clean and intuitive interface
- Smooth animations and transitions
- Custom scrollbar styling
- Beautiful gradient backgrounds

---

## 🛠️ Tech Stack

### **Frontend**

- **React 19.1.1** - UI library
- **Vite** - Fast build tool
- **TailwindCSS 4.1.14** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Socket.io Client** - Real-time communication
- **Axios** - HTTP client
- **React Hot Toast** - Beautiful notifications

### **Backend**

- **Node.js** - Runtime environment
- **Express 5.1.0** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Socket.io** - Real-time bidirectional communication
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Cloudinary** - Image storage and optimization
- **CORS** - Cross-origin resource sharing

---

## 📸 Screenshots

### Home Page

_Real-time chat interface with online status indicators_

### Login/Signup

_Secure authentication system_

### Profile Page

_Customizable user profiles with image upload_

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Aashish1A/Chat_App.git
   cd Chat_App
   ```

2. **Setup Backend**

   ```bash
   cd Server
   npm install
   ```

   Create a `.env` file in the Server directory:

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   CLIENT_URL=http://localhost:5173
   ```

   Start the server:

   ```bash
   npm run server
   ```

3. **Setup Frontend**

   ```bash
   cd ../Client
   npm install
   ```

   Create a `.env` file in the Client directory:

   ```env
   VITE_BACKEND_URL=http://localhost:3000
   ```

   Start the development server:

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

---

## 📁 Project Structure

```
Chat_App/
├── Client/                 # Frontend React application
│   ├── src/
│   │   ├── assets/        # Images and static assets
│   │   ├── components/    # Reusable React components
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── RightSidebar.jsx
│   │   ├── context/       # React Context API
│   │   │   ├── AuthContext.jsx
│   │   │   └── ChatContext.jsx
│   │   ├── lib/           # Utility functions
│   │   ├── pages/         # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── ProfilePage.jsx
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # Entry point
│   ├── package.json
│   └── vite.config.js
│
└── Server/                 # Backend Node.js application
    ├── controllers/        # Route controllers
    │   ├── messageController.js
    │   └── userController.js
    ├── lib/               # Configuration files
    │   ├── cloudinary.js
    │   ├── db.js
    │   └── utils.js
    ├── middleware/        # Custom middleware
    │   └── auth.js
    ├── models/            # Mongoose models
    │   ├── Message.js
    │   └── User.js
    ├── routes/            # API routes
    │   ├── messageRoutes.js
    │   └── userRoutes.js
    ├── server.js          # Entry point
    └── package.json
```

---

## 🔑 Key Features Explained

### Real-Time Communication

The app uses Socket.io to establish a WebSocket connection between the client and server, enabling instant message delivery without polling.

### State Management

React Context API is used for global state management, handling authentication state and chat data across components.

### Image Upload

Images are uploaded to Cloudinary using their API, converted to base64 on the client side, and stored with optimized delivery URLs.

### Authentication Flow

1. User registers/logs in with credentials
2. Server validates and returns JWT token
3. Token stored in localStorage
4. Token sent with every API request for authentication
5. Protected routes verify token before granting access

---

## 🌐 API Endpoints

### Authentication

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/check` - Verify authentication
- `GET /api/auth/users` - Get all users
- `POST /api/auth/logout` - Logout user

### Messages

- `GET /api/messages/:userId` - Get messages with specific user
- `POST /api/messages/send` - Send a message

### Profile

- `PUT /api/auth/update-profile` - Update user profile

---

## 🎯 Future Enhancements

- [ ] Group chat functionality
- [ ] Voice and video calling
- [ ] Message reactions and emojis
- [ ] File sharing (documents, videos)
- [ ] Message search functionality
- [ ] Dark/Light theme toggle
- [ ] Typing indicators
- [ ] Message editing and deletion
- [ ] Push notifications
- [ ] End-to-end encryption

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Aashish Kumar**

- GitHub: [@Aashish1A](https://github.com/Aashish1A)
- Live Demo: [Chat Wave](https://chat-wave-one.vercel.app/)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Socket.io for real-time capabilities
- TailwindCSS for beautiful styling utilities
- Cloudinary for image hosting
- MongoDB for flexible database solutions
- Vercel for seamless deployment

---

<div align="center">
  <p>Made with ❤️ by Aashish Kumar</p>
  <p>⭐ Star this repo if you like it!</p>
</div>
