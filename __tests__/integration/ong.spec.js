const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'APAD2',
        email: 'contato@apad.com.br',
        whatsapp: '8100000000',
        city: 'Jaboatão dos Guararapes',
        uf: 'PE',
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    expect(response.status).toBe(200);
  });

  it('should be able to retrieve ONGs list', async () => {
    const response = await request(app).get('/ongs');

    expect(response.body).toBeInstanceOf(Array);
    expect(response.status).toBe(200);
  });
});
