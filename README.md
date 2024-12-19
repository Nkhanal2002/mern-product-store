# Product Store

A responsive MERN (MongoDB, Express, React, Node.js) stack application built for managing products. This project allows customers to add, delete, and edit products based on their needs. The frontend is styled using TailwindCSS, while Zustand is used for efficient state management and API interactions.

## Features

- **Product Management**: Add, delete, and update products seamlessly
- **State Management**: Efficient state management using Zustand for clear and organized API usage
- **Responsive Design**: TailwindCSS ensures a fully responsive and user-friendly interface
- **Backend API**: A robust Express.js API connects the frontend with MongoDB
- **Production Ready**: Easily configurable for deployment

## Prerequisites

Ensure the following are installed:

- Node.js
- MongoDB (for local database development)
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Nkhanal2002/mern-product-store.git
cd mern-product-store
```

2. Install dependencies for both frontend and backend:

```bash
cd frontend
npm install
cd ../backend
npm install
```

3. Create a .env file in the backend directory and configure the following environment variables:

```bash
PORT=3000
MONGO_URI=your_mongo_connection_string
NODE_ENV=development
```

4. Start the application:

- Backend:

```bash
cd backend
npm run start
```

- Frontend:

```bash
cd frontend
npm run dev
```

## Technology Used

- Frontend: React, TailwindCSS
- Backend: Node.js, Express
- Database: MongoDB

## Author

- **[Narayan Khanal](https://nkhanal-portfolio-website.vercel.app)** - _Initial work_ - [GitHub](https://github.com/Nkhanal2002)
