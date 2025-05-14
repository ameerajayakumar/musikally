# Musikally - Tune In. Vibe Out.

Musikally is a full-stack music streaming platform that allows users to discover, share, and enjoy music.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **User Authentication**: Secure user authentication powered by Clerk
- **User Profiles**: Personalized user profiles with profile images
- **Music Library**: Browse and stream songs and albums
- **Admin Dashboard**: Administrative controls for content management
- **Real-time Updates**: Socket.io integration for real-time features
- **Statistics**: Track listening statistics and user engagement

## 🛠️ Tech Stack

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Clerk** - Authentication and user management
- **Cloudinary** - Cloud storage for media files
- **Socket.io** - Real-time bidirectional event-based communication

### Frontend

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **Clerk React** - Authentication UI components

## 📁 Project Structure

```
musikally/
├── backend/                # Backend server code
│   ├── src/
│   │   ├── index.js        # Entry point
│   │   ├── lib/            # Utilities and helpers
│   │   ├── models/         # Database models
│   │   └── routes/         # API routes
│   ├── .env                # Environment variables
│   └── package.json        # Dependencies and scripts
│
└── frontend/               # Frontend client code
    ├── src/
    │   ├── components/     # UI components
    │   ├── lib/            # Utilities
    │   ├── App.tsx         # Main application component
    │   └── main.tsx        # Entry point
    ├── .env                # Environment variables
    └── package.json        # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB instance (local or Atlas)
- Clerk account for authentication
- Cloudinary account for media storage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/musikally.git
   cd musikally
   ```

2. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables

#### Backend (.env)

```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

#### Frontend (.env)

```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:4000/api
```

## 🏃‍♂️ Running the Application

### Development Mode

1. Start the backend server:

   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend development server:

   ```bash
   cd frontend
   npm run dev
   ```

3. Access the application:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:4000/api

### Production Build

1. Build the frontend:

   ```bash
   cd frontend
   npm run build
   ```

2. The build output will be in the `frontend/dist` directory, which can be served by a static file server.

## 📡 API Endpoints

### Authentication

- `GET /api/auth` - Authentication routes

### Users

- `GET /api/users` - Get user information

### Songs

- `GET /api/songs` - Get songs

### Albums

- `GET /api/albums` - Get albums

### Admin

- `GET /api/admin` - Admin routes

### Statistics

- `GET /api/stats` - Get statistics

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.
