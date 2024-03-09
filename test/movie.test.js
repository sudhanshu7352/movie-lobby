const request = require('supertest');
// const jest =require("jest");
const app = require('../index'); 
// jest.timeout(5000);

describe('Movie API', () => {
  // GET /movies
  it('should return a list of movies', async () => {
    const response = await request(app).get('/movies');
    expect(response.status).toBe(200);
    expect(response.body.movies).toBeInstanceOf(Array);
  },20000);

  
});

// GET /search?q={query}
describe('GET /search?q={query}', () => {
  it('should return movies matching the search query (title or genre)', async () => {
    const query = 'star wars';
    const response = await request(app).get(`/search?q=${query}`);
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    
  });


});

// // POST /movies
describe('POST /movies', () => {
  it('should create a new movie', async () => {
    const newMovie = {
      title: 'Test Movie',
      genre: 'Action',
      rating: 4,
      streamingLink: 'https://example.com/movie',
    };

    const response = await request(app).post('/movies').send(newMovie);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id');
    
  });

  
});

// PUT /movies/:id
describe('PUT /movies/:id', () => {
  it('should update an existing movie', async () => {
    const movieId = '65ec2196a07905594e18e8f8'; 
    const updates = { title: 'Updated Title' };

    const response = await request(app)
      .put(`/movies/${movieId}`)
      .send(updates);
    expect(response.status).toBe(200);
    // expect(response.body).toHaveProperty('_id');
    // expect(response.body.title).toBe(updates.title);
  });

  // Add more tests for invalid ID, invalid updates, etc.
});

// DELETE /movies/:id
describe('DELETE /movies/:id', () => {
  it('should delete a movie', async () => {
    const movieId = '65ec2196a07905594e18e8f8'; 

    const response = await request(app).delete(`/movies/${movieId}`);
    expect(response.status).toBe(200);
    expect(
      response.body.message === 'Movie deleted successfully' ||
        response.body.message === 'Movie not found'
    ).toBeTruthy();
  });

  // Add more tests for invalid ID, etc.
});
