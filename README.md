# Movie Lobby API

## Description
The Movie Lobby API provides endpoints to manage a collection of movies with information such as title, genre, rating, and streaming link.


## Setup Instructions

### Prerequisites
- Node.js installed on your local machine
- MongoDB installed and running

### Steps
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd movie-lobby

### Install dependencies:

`npm install`

### Set up environment variables:

Create a .env file in the root directory.
Define the following environment variables:
DB_URL,
DB_Name,
PORT.

### Start the server:

`npm start`

### Test the API:

You can use tools like Postman or cURL to make requests to the API endpoints.
### Additionally, you can run the provided test cases using:

`npm test`

## Endpoints

### List all movies
- **Method**: GET
- **URL**: `/movies`
- **Description**: Retrieves a list of all movies in the lobby.
- **Response**: 
  - Status: 200 OK
  - Body: JSON array of movie objects.

### Search for a movie
- **Method**: GET
- **URL**: `/search?q={query}`
- **Description**: Searches for movies by title or genre based on the provided query parameter.
- **Response**: 
  - Status: 200 OK
  - Body: JSON array of movie objects matching the search criteria.

### Add a new movie
- **Method**: POST
- **URL**: `/movies`
- **Description**: Adds a new movie to the lobby.
- **Request Body**: JSON object with movie details (title, genre, rating, streaming link).
- **Response**: 
  - Status: 200 Created
  - Body: JSON object of the created movie.

### Update an existing movie
- **Method**: PUT
- **URL**: `/movies/:id`
- **Description**: Updates an existing movie's information (title, genre, rating, streaming link).
- **Request Parameters**: 
  - `id`: The ID of the movie to update.
- **Request Body**: JSON object with updated movie details.
- **Response**: 
  - Status: 200 OK
  - Body: JSON object of the updated movie.

### Delete a movie
- **Method**: DELETE
- **URL**: `/movies/:id`
- **Description**: Deletes a movie from the lobby.
- **Request Parameters**: 
  - `id`: The ID of the movie to delete.
- **Response**: 
  - Status: 200 OK
  - Body: JSON object with a success message.

