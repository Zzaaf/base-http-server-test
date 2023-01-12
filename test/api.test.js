const request = require('supertest');

const baseURL = 'http://localhost:3000';

describe('GET /', () => {
  it('Should return status 200.', async () => {
    const response = await request(baseURL).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('HTTP server is working!');
  });
});

describe('GET /users', () => {
  it('Should return status 200. No errors.', async () => {
    const response = await request(baseURL).get('/users');
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(null);
  });
});
