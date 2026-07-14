# Cloud Task API - Version 1

A RESTful Task Management API built using Node.js, Express.js, MongoDB Atlas, and Mongoose.

## Features

- Create a Task
- View All Tasks
- View Task by ID
- Update Existing Task
- Delete Task
- MongoDB Atlas Integration
- Environment Variable Configuration

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman
- Git
- GitHub

## Project Structure

cloud-task-api-v1/

├── models/

│   └── Task.js

├── .env

├── .gitignore

├── package.json

├── server.js

└── README.md

## API Endpoints

GET /tasks

GET /tasks/:id

POST /tasks

PATCH /tasks/:id

DELETE /tasks/:id

## Sample POST Request

{
  "task": "Learn Docker"
}

## Installation

git clone <repository-url>

cd cloud-task-api-v1

npm install

Create a .env file

MONGODB_URI=your_connection_string

node server.js

Server runs on:

http://localhost:3000

## Future Improvements

- Docker Support
- AWS EC2 Deployment
- GitHub Actions CI/CD
- Terraform Automation
- JWT Authentication
- User Management

## Author

Tejasri Sirigineedi