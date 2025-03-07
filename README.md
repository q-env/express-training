# express-training

This project is a basic setup for using Express to create a backend API that handles JSON data. Follow the instructions below to get your environment up and running.

## Environment Setup

1. **Create a new project directory**:
    ```bash
    mkdir express-training
    cd express-training
    ```

2. **Initialize the project**:
    ```bash
    npm init -y
    ```

3. **Install the required packages**:
    ```bash
    npm install express body-parser
    ```

4. **Install CORS middleware**:
    ```bash
    npm install cors
    ```

5. **Start the server**:
    ```bash
    node src/server.js
    ```

## Additional Information

- **GET /api/data**: Retrieve the list of saved JSON data.
- **POST /api/data**: Save JSON data.

## Testing the API

1. **GET Request**
    ```bash
    curl -X GET http://localhost:3001/api/data
    ```

2. **POST Request**
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com"}' http://localhost:3001/api/data
    ```

Make sure you have Node.js and npm installed on your machine before starting. For more information on Express, you can visit the [official documentation](https://expressjs.com/).

Happy coding!