# 🎨 Collaborative Whiteboard

A real-time collaborative whiteboard application built with Next.js, enabling multiple users to draw, create shapes, and collaborate seamlessly on a shared canvas with live updates.

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)
![Convex](https://img.shields.io/badge/Convex-1.27.1-orange?style=flat-square)
![Liveblocks](https://img.shields.io/badge/Liveblocks-3.7.1-purple?style=flat-square)

## 📚 Learning Project

This project was built as part of a comprehensive learning journey to master modern web development technologies and real-time collaboration patterns. It follows a detailed tutorial that covers:

- **Tutorial Source**: Build a Real-Time Miro Clone With Nextjs, React, Tailwind (2024) by Code With Antonio
- **YouTube Link**: https://youtu.be/ADJKbuayubE?si=4y40b2rFS6FFStAq

### What I Learned

- Real-time collaboration implementation using Liveblocks
- Serverless backend development with Convex
- Advanced React patterns and custom hooks
- TypeScript integration in full-stack applications
- Authentication and multi-tenancy with Clerk
- Canvas manipulation and drawing algorithms
- State management with Zustand
- Modern UI development with Radix UI and Tailwind CSS

This project demonstrates practical application of cutting-edge web technologies and serves as a foundation for building scalable collaborative applications.

## ✨ Features

### 🎯 Core Functionality

- **Real-time Collaboration** - Multiple users can work simultaneously with live cursor tracking
- **Drawing Tools** - Freehand drawing with pressure-sensitive pen tool using Perfect Freehand
- **Shape Creation** - Rectangle, ellipse, text, and sticky note tools
- **Layer Management** - Advanced layer system with selection, moving, and resizing
- **Live Updates** - Instant synchronization of all changes across connected users

### 🔐 Authentication & Organization

- **Secure Authentication** - Powered by Clerk with organization support
- **Multi-tenant Architecture** - Organization-based board isolation
- **User Management** - Real-time presence indicators and user avatars

### 📋 Board Management

- **Board Creation** - Create unlimited whiteboards per organization
- **Search & Filter** - Full-text search across board titles
- **Favorites System** - Mark and filter favorite boards
- **Board Persistence** - All boards and drawings saved automatically

### 🎨 User Experience

- **Responsive Design** - Works seamlessly across desktop and mobile devices
- **Dark/Light Theme** - Theme switching with next-themes
- **Intuitive UI** - Clean interface built with Radix UI components
- **Toast Notifications** - Real-time feedback with Sonner
- **Smooth Animations** - Enhanced UX with Tailwind animations

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15.5.3 with App Router and Turbopack
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom animations
- **UI Components**: Radix UI primitives
- **State Management**: Zustand for client-side state
- **Real-time**: Liveblocks for collaborative features

### Backend & Database

- **Backend**: Convex for serverless backend and real-time database
- **Authentication**: Clerk for user management and organizations
- **Schema**: Type-safe database schema with Convex

### Development Tools

- **Linting**: ESLint 9 with Next.js configuration
- **Package Manager**: npm with lock file
- **Development**: Hot reload with Turbopack

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Convex account
- Clerk account
- Liveblocks account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/collaborative-whiteboard.git
   cd collaborative-whiteboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:

   ```env
   # Convex
   CONVEX_DEPLOYMENT=your_convex_deployment
   NEXT_PUBLIC_CONVEX_URL=your_convex_url

   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Liveblocks
   LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
   ```

4. **Set up Convex**

   ```bash
   npx convex dev
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
collaborative-whiteboard/
├── app/                    # Next.js App Router
│   ├── (dashboard)/       # Dashboard routes
│   ├── api/               # API routes
│   ├── board/             # Board-specific pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── auth/             # Authentication components
│   ├── modals/           # Modal components
│   └── ui/               # Reusable UI components
├── convex/               # Convex backend
│   ├── auth.config.ts    # Authentication configuration
│   ├── board.ts          # Board mutations and queries
│   ├── boards.ts         # Boards listing logic
│   └── schema.ts         # Database schema
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── providers/            # React context providers
├── store/                # Zustand stores
└── types/                # TypeScript type definitions
```

## 🎮 Usage

### Creating a Board

1. Sign in with your account
2. Select or create an organization
3. Click "Create Board" and give it a name
4. Start drawing and collaborating!

### Drawing Tools

- **Pen Tool**: Freehand drawing with pressure sensitivity
- **Rectangle**: Click to create rectangles
- **Ellipse**: Click to create circles/ellipses
- **Text**: Add text annotations
- **Sticky Notes**: Create colored note cards

### Collaboration Features

- See other users' cursors in real-time
- Watch live drawing updates
- Select and move objects together
- Undo/redo with collaborative history

## 🔧 Configuration

### Convex Schema

The database uses a simple but effective schema:

- `boards`: Store board metadata and ownership
- `userFavorites`: Track user's favorite boards

### Liveblocks Integration

Real-time features powered by Liveblocks:

- Live cursors and presence
- Collaborative drawing canvas
- Shared layer management
- Conflict-free collaborative editing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Liveblocks](https://liveblocks.io/) for real-time collaboration infrastructure
- [Convex](https://convex.dev/) for the serverless backend platform
- [Clerk](https://clerk.com/) for authentication and user management
- [Perfect Freehand](https://github.com/steveruizok/perfect-freehand) for smooth drawing experience
- [Radix UI](https://radix-ui.com/) for accessible UI components

---

<div align="center">
  <p>Built with ❤️ using Next.js and modern web technologies</p>
</div>
