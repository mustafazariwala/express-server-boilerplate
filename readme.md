# Node.js Express Server Boilerplate

This is a basic boilerplate for creating a Node.js Express server. It provides a simple structure to kickstart your project.

## Features
- Environment Variables: Utilizes the dotenv package to load environment variables from a .env file.
- Express Server: Sets up an Express server with default configurations.
- JSON Parsing Middleware: Middleware to parse incoming request data as JSON objects.
- Modular Routing: Organizes routes into separate files for better maintainability.
- CRUD Example: Provides a basic CRUD example for user routes.


## Getting Started

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Create a `.env` file and add the necessary environment variables.
4. Start the server using `npm start`.

## Project Structure
```
.
├── routes/
│   ├── index.js           # Main router file
│   └── users.js           # User routes
├── controllers/
│   └── users.js           # Controller for user routes
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts
└── server.js              # Main server file
```

## Environment Variables

The following environment variables are used in this project:

- `PORT`: The port number on which the server will run. Default value is 3000.

## API Routes

- `/api`: Root route for the API.
- `/api/users`: Route for user-related operations.

## API Endpoints

- `GET /api/users`: Get all users.
- `POST /api/users`: Create a new user.
- `PUT /api/users`: Update an existing user.
- `DELETE /api/users`: Delete a user.

## Controllers

The controllers for handling user-related requests can be found in the `controllers/users.js` file.

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).