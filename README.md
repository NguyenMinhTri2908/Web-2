# README.md

# Web Project

This is a full-stack web project that utilizes HTML, CSS, Vue.js for the frontend, and Node.js, Express.js, and MongoDB for the backend.

## Project Structure

```
web-project
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   └── utils
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   │   ├── index.html
│   │   └── styles.css
│   ├── src
│   │   ├── App.vue
│   │   ├── components
│   │   └── main.js
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd web-project
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   node src/app.js
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm run dev
   ```

## Features

- RESTful API with Express.js
- MongoDB for data storage
- Vue.js for a reactive frontend
- Responsive design with CSS

## License

This project is licensed under the MIT License.