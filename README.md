# Blog API

This is a simple Blog API built using Express.js, dotenv, and Mongoose. It provides endpoints for managing blog posts, comments, and likes.

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
  - [Posts](#posts)
  - [Comments](#comments)
  - [Likes](#likes)
- [Environment Variables](#environment-variables)

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your environment variables in a `.env` file (e.g., PORT, MONGODB_URI)
4. Start the server: `npm start`

## Folder Structure

The project is organized with the following folder structure:

- `controllers`: Contains the logic for handling different API endpoints.
- `models`: Defines the Mongoose schema and model for the Post, Like, and Comment resources.
- `routes`: Contains Express.js router files that define the API routes for posts, comments, and likes.
- `config`: Includes configuration files (e.g., database connection setup).
- `index.js`: Entry point of the application.

## API Endpoints

### Posts

- `GET /api/v1/posts`: Get all blog posts.
- `POST /api/v1/posts/create`: Create a new blog post.

### Comments

- `POST /api/v1/comments/create`: Create a new comment for a specific blog post.

### Likes

- `POST /api/v1/likes/like`: Like a specific blog post.
- `POST /api/v1/likes/unlike`: Unlike a specific blog post.

## Environment Variables

The project uses environment variables to configure certain settings. Make sure to create a `.env` file in the root directory and define the following variables:
- `PORT`: The port number on which the server will listen for incoming requests.
- `MONGODB_URI`: The connection URI for your MongoDB database, allowing the API to establish a connection to the database.

## Testing

You can test the API endpoints using Postman or any other API testing tool. Send HTTP requests to the defined endpoints to interact with the blog API.

## Contribution

Contributions to this project are welcome! If you would like to contribute, please fork the repository and create a pull request. Please follow the existing code style and conventions.
