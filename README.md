<div align="center">

# 💬 ChatWave - Real-Time Messaging Platform

<img src="https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
<img src="https://img.shields.io/badge/Node.js-23.6.0-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
<img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
<img src="https://img.shields.io/badge/Socket.io-4.8.1-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.io" />
<img src="https://img.shields.io/badge/TailwindCSS-4.1.14-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
<img src="https://img.shields.io/badge/Express-5.1.0-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />

### 🚀 A Modern Full-Stack Real-Time Chat Application

Built with MERN Stack | Socket.io | JWT Authentication | Cloudinary Integration

[View Live Demo](https://chat-wave-one.vercel.app/) • [Report Bug](https://github.com/Aashish1A/Chat_App/issues) • [Request Feature](https://github.com/Aashish1A/Chat_App/issues)

</div>

---

## 🎯 About The Project

**ChatWave** is a production-ready, real-time messaging application that demonstrates modern full-stack development practices. Built with scalability and user experience in mind, it features instant messaging, online presence detection, media sharing, and a beautiful, responsive interface.

### 🎪 Why This Project Stands Out

- **Real-Time Architecture**: Leverages Socket.io for bi-directional, event-based communication
- **Scalable Backend**: RESTful API design with JWT-based authentication
- **Modern Frontend**: React 19 with Context API for efficient state management
- **Cloud Integration**: Cloudinary for optimized media storage and delivery
- **Production Ready**: Deployed on Vercel with error handling and logging
- **Best Practices**: Clean code, modular architecture, and security-first approach

---

## ✨ Key Features

### 🔐 **Authentication & Security**
- ✅ JWT-based authentication system
- ✅ Bcrypt password hashing (10 salt rounds)
- ✅ Protected API routes with middleware
- ✅ Secure token storage and validation
- ✅ Session persistence across browser refreshes

### 💬 **Real-Time Messaging**
- ✅ Instant message delivery via WebSocket
- ✅ Real-time online/offline status indicators
- ✅ Unread message badges with counters
- ✅ Message timestamps with formatted display
- ✅ Persistent message history in MongoDB
- ✅ Smooth scroll to new messages

### 🖼️ **Media & File Handling**
- ✅ Image upload and sharing
- ✅ Cloudinary integration for optimized storage
- ✅ Base64 encoding for seamless uploads
- ✅ Image preview in chat
- ✅ Shared media gallery view

### 👤 **User Management**
- ✅ User registration with bio and profile picture
- ✅ Profile editing functionality
- ✅ User search with real-time filtering
- ✅ Avatar display with online indicators
- ✅ User list with active status

### 🎨 **UI/UX Excellence**
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern glassmorphism effects
- ✅ Smooth animations and transitions
- ✅ Custom gradient backgrounds
- ✅ Intuitive navigation and chat interface
- ✅ Toast notifications for user feedback
- ✅ Loading states and error handling

---

## 🛠️ Tech Stack

### **Frontend**
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.1.1 | UI Library |
| Vite | 6.0.11 | Build Tool & Dev Server |
| TailwindCSS | 4.1.14 | Utility-First CSS Framework |
| React Router | 7.1.6 | Client-Side Routing |
| Socket.io Client | 4.8.1 | Real-Time Communication |
| Axios | 1.7.9 | HTTP Client |
| React Hot Toast | 2.4.1 | Toast Notifications |

### **Backend**
| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | 23.6.0 | Runtime Environment |
| Express | 5.1.0 | Web Framework |
| MongoDB | Latest | NoSQL Database |
| Mongoose | 8.9.6 | MongoDB ODM |
| Socket.io | 4.8.1 | WebSocket Server |
| JWT | 9.0.2 | Authentication |
| Bcryptjs | 2.4.3 | Password Hashing |
| Cloudinary | 2.6.0 | Cloud Media Storage |
| CORS | 2.8.5 | Cross-Origin Support |
| Dotenv | 16.4.7 | Environment Management |

---

## 🏗️ System Architecture

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│                 │         │                 │         │                 │
│  React Client   │◄───────►│  Express Server │◄───────►│    MongoDB      │
│   (Vite)        │         │   + Socket.io   │         │    Database     │
│                 │         │                 │         │                 │
└────────┬────────┘         └────────┬────────┘         └─────────────────┘
         │                           │
         │                           │
         │                  ┌────────▼────────┐
         │                  │                 │
         └─────────────────►│   Cloudinary    │
                            │  (Media CDN)    │
                            │                 │
                            └─────────────────┘

Flow:
1. Client authenticates via JWT
2. WebSocket connection established for real-time updates
3. Messages stored in MongoDB
4. Images uploaded to Cloudinary
5. Real-time updates pushed to connected clients
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0.0 or higher) or **yarn**
- **MongoDB** (local installation or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Git** - [Download](https://git-scm.com/)

Optional:
- **Cloudinary Account** - [Sign Up Free](https://cloudinary.com/)

---

## 📦 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/Aashish1A/Chat_App.git
cd Chat_App
```

### Step 2: Backend Setup

```bash
cd Server
npm install
```

Create `.env` file in the **Server** directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/chatwave
# OR use MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/chatwave

# JWT Secret (Use a strong random string)
JWT_SECRET=your_super_secret_jwt_key_min_32_characters

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run dev
# or
npm start
```

Server will run on: `http://localhost:3000`

### Step 3: Frontend Setup

Open a new terminal:

```bash
cd Client
npm install
```

Create `.env` file in the **Client** directory:

```env
VITE_BACKEND_URL=http://localhost:3000
```

Start the frontend development server:

```bash
npm run dev
```

Frontend will run on: `http://localhost:5173`

### Step 4: Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

---

## 🔑 Environment Variables

### Backend (.env in Server/)

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/chatwave` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_secret_key_min_32_chars` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | `your_cloud_name` |
| `CLOUDINARY_API_KEY` | Cloudinary API key | `123456789012345` |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | `your_api_secret` |
| `CLIENT_URL` | Frontend URL for CORS | `http://localhost:5173` |

### Frontend (.env in Client/)

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_BACKEND_URL` | Backend API URL | `http://localhost:3000` |

---

## 📁 Project Structure

```
Chat_App/
│
├── Client/                          # Frontend Application
│   ├── public/
│   │   ├── favicon.svg             # Custom teal favicon
│   │   └── bgImage.svg             # Background gradient image
│   │
│   ├── src/
│   │   ├── assets/                 # Images and icons
│   │   │   └── assets.js           # Asset exports
│   │   │
│   │   ├── components/             # Reusable Components
│   │   │   ├── ChatContainer.jsx   # Main chat interface
│   │   │   ├── Sidebar.jsx         # User list & navigation
│   │   │   └── RightSidebar.jsx    # Chat info & media
│   │   │
│   │   ├── context/                # Global State Management
│   │   │   ├── AuthContext.jsx     # Authentication state
│   │   │   └── ChatContext.jsx     # Chat & messaging state
│   │   │
│   │   ├── lib/                    # Utility Functions
│   │   │   └── utils.js            # Helper functions
│   │   │
│   │   ├── pages/                  # Page Components
│   │   │   ├── HomePage.jsx        # Main chat page
│   │   │   ├── LoginPage.jsx       # Auth page
│   │   │   └── ProfilePage.jsx     # Profile edit page
│   │   │
│   │   ├── App.jsx                 # Root component
│   │   ├── index.css               # Global styles
│   │   └── main.jsx                # Entry point
│   │
│   ├── .env                        # Environment variables
│   ├── eslint.config.js            # ESLint configuration
│   ├── index.html                  # HTML template
│   ├── package.json                # Dependencies
│   ├── vite.config.js              # Vite configuration
│   └── vercel.json                 # Vercel deployment config
│
└── Server/                          # Backend Application
    ├── controllers/                # Route Controllers
    │   ├── messageController.js    # Message logic
    │   └── userController.js       # User & auth logic
    │
    ├── lib/                        # Configuration
    │   ├── cloudinary.js           # Cloudinary setup
    │   ├── db.js                   # MongoDB connection
    │   └── utils.js                # JWT token generation
    │
    ├── middleware/                 # Custom Middleware
    │   └── auth.js                 # JWT authentication
    │
    ├── models/                     # Mongoose Models
    │   ├── Message.js              # Message schema
    │   └── User.js                 # User schema
    │
    ├── routes/                     # API Routes
    │   ├── messageRoutes.js        # Message endpoints
    │   └── userRoutes.js           # User endpoints
    │
    ├── .env                        # Environment variables
    ├── package.json                # Dependencies
    ├── server.js                   # Entry point & Socket.io
    └── vercel.json                 # Vercel deployment config
```

---

## 📸 Screenshots

### 🏠 Home Page - Chat Interface
*Real-time messaging with online status, unread badges, and responsive design*

![Home Page](github/assets/homepage.png)

### 🔐 Authentication Page
*Modern login/signup interface with gradient background*

![Authentication Page](github/assets/auth.png)

### 👤 Profile Management
*User profile editing with image upload*

![Profile Management](github/assets/profile.png)

### 💬 Chat Window
*Clean chat interface with message bubbles and timestamps*

![Chat Window](github/assets/chat.png)

---

## ⚡ Performance & Optimization

### Frontend Optimizations
- ✅ **Vite Build Tool**: Lightning-fast hot module replacement
- ✅ **Code Splitting**: React.lazy for route-based splitting
- ✅ **Image Optimization**: Cloudinary CDN with automatic optimization
- ✅ **Efficient Re-renders**: React Context with proper memoization
- ✅ **Smooth Scrolling**: Optimized scroll-to-bottom on new messages

### Backend Optimizations
- ✅ **Database Indexing**: Indexed user emails and message timestamps
- ✅ **JWT Stateless Auth**: No server-side session storage
- ✅ **Socket.io Rooms**: Efficient event broadcasting
- ✅ **Error Handling**: Comprehensive try-catch blocks
- ✅ **CORS Configuration**: Secure cross-origin requests

### Security Features
- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ JWT token expiration and validation
- ✅ Protected API routes with authentication middleware
- ✅ Input validation and sanitization
- ✅ Secure environment variable management
- ✅ HTTPS in production (Vercel)

---

## 🚢 Deployment

### Deployed on Vercel

**Live Application**: [https://chat-wave-one.vercel.app/](https://chat-wave-one.vercel.app/)

### Deploy Your Own

#### Frontend (Vercel)
1. Push your code to GitHub
2. Import project in Vercel
3. Set root directory to `Client`
4. Add environment variable: `VITE_BACKEND_URL`
5. Deploy

#### Backend (Vercel/Render/Railway)
1. Push your code to GitHub
2. Import project in your platform
3. Set root directory to `Server`
4. Add all environment variables
5. Deploy

### Environment Variables for Production
```env
# Backend Production
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_production_secret
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
CLIENT_URL=https://your-frontend-url.vercel.app

# Frontend Production
VITE_BACKEND_URL=https://your-backend-url.vercel.app
```

---

## 🔮 Future Enhancements

### Planned Features
- [ ] **Group Chats**: Create and manage group conversations
- [ ] **Voice Messages**: Record and send audio messages
- [ ] **Video Calling**: 1-on-1 video calls integration
- [ ] **Message Reactions**: Emoji reactions to messages
- [ ] **File Sharing**: Support for documents, PDFs, videos
- [ ] **Typing Indicators**: See when someone is typing
- [ ] **Message Status**: Sent, delivered, read receipts
- [ ] **Delete Messages**: Delete for me/everyone
- [ ] **Edit Messages**: Edit sent messages
- [ ] **Push Notifications**: Desktop and mobile notifications
- [ ] **Email Verification**: Verify user emails
- [ ] **Password Reset**: Forgot password functionality
- [ ] **User Blocking**: Block unwanted users
- [ ] **Message Forwarding**: Forward messages to other chats
- [ ] **Voice/Video Calls**: WebRTC integration
- [ ] **Stories**: Status/story feature

---

## 🤝 Contributing

Contributions make the open-source community amazing! Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
   ```bash
   git clone https://github.com/Aashish1A/Chat_App.git
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed
- Add comments for complex logic

---

## 📞 Contact

**Aashish Kumar**

- 📧 Email: [your.email@example.com](mailto:aashishkumar93412@gmail.com)
- 🐙 GitHub: [@Aashish1A](https://github.com/Aashish1A)
- 🔗 LinkedIn: [Your LinkedIn](https://linkedin.com/in/Aashish1a)
- 🌐 Portfolio: [Your Portfolio](https://aashish1a.netlify.app)

**Project Links**
- 🚀 Live Demo: [https://chat-wave-one.vercel.app/](https://chat-wave-one.vercel.app/)
- 📦 Repository: [https://github.com/Aashish1A/Chat_App](https://github.com/Aashish1A/Chat_App)
- 🐛 Issues: [https://github.com/Aashish1A/Chat_App/issues](https://github.com/Aashish1A/Chat_App/issues)

---

## 🙏 Acknowledgments

Special thanks to these amazing technologies and resources:

- [React](https://react.dev/) - For the powerful UI library
- [Node.js](https://nodejs.org/) - For the robust runtime environment
- [MongoDB](https://www.mongodb.com/) - For flexible data storage
- [Socket.io](https://socket.io/) - For real-time communication
- [TailwindCSS](https://tailwindcss.com/) - For beautiful styling
- [Cloudinary](https://cloudinary.com/) - For media management
- [Vercel](https://vercel.com/) - For seamless deployment
- [Heroicons](https://heroicons.com/) - For beautiful icons

---

<div align="center">

### 💖 Show Your Support

Give a ⭐️ if you like this project!

**Made with ❤️ and React by [Aashish Kumar](https://github.com/Aashish1A)**

---

*This project was built to demonstrate full-stack development skills with modern technologies and best practices.*

</div>
