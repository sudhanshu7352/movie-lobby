const request = require('supertest');
// const jest =require("jest");
const app = require('../index'); 
// jest.timeout(5000);

describe('Movie API', () => {
  // GET /movies
  it('should return a list of movies', async () => {
    const response = await request(app).get('/movies');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  // Add more tests for error handling, empty list, etc.
});

// // GET /search?q={query}
// describe('GET /search?q={query}', () => {
//   it('should return movies matching the search query (title or genre)', async () => {
//     const query = 'star wars';
//     const response = await request(app).get(`/search?q=${query}`);
//     expect(response.status).toBe(200);
//     expect(response.body).toBeInstanceOf(Array);
//     // You can add assertions to check if returned movies match the query
//   });

//   // Add more tests for invalid queries, etc.
// });

// // POST /movies
// describe('POST /movies', () => {
//   it('should create a new movie', async () => {
//     const newMovie = {
//       title: 'Test Movie',
//       genre: 'Action',
//       rating: 4,
//       streamingLink: 'https://example.com/movie',
//     };

//     const response = await request(app).post('/movies').send(newMovie);
//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('_id');
//     // You can add assertions to check other properties of the created movie
//   });

//   // Add more tests for invalid data, missing fields, etc.
// });

// // PUT /movies/:id
// describe('PUT /movies/:id', () => {
//   it('should update an existing movie', async () => {
//     const movieId = '1234567890abcdef'; // Replace with a valid movie ID
//     const updates = { title: 'Updated Title' };

//     const response = await request(app)
//       .put(`/movies/${movieId}`)
//       .send(updates);
//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('_id');
//     expect(response.body.title).toBe(updates.title);
//   });

//   // Add more tests for invalid ID, invalid updates, etc.
// });

// // DELETE /movies/:id
// describe('DELETE /movies/:id', () => {
//   it('should delete a movie', async () => {
//     const movieId = '1234567890abcdef'; // Replace with a valid movie ID

//     const response = await request(app).delete(`/movies/${movieId}`);
//     expect(response.status).toBe(200);
//     expect(
//       response.body.message === 'Movie deleted successfully' ||
//         response.body.message === 'Movie not found'
//     ).toBeTruthy();
//   });

//   // Add more tests for invalid ID, etc.
// });
