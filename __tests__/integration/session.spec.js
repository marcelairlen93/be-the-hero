const request = require('supertest');
const faker = require('faker/locale/pt_BR');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Session', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to log the ONG in if it has been provided a valid id', async () => {
    const ongResponse = await request(app)
      .post('/ongs').send({
        name: faker.company.companyName(),
        email: faker.internet.email(),
        whatsapp: '81900001212',
        city: faker.address.city(),
        uf: faker.address.stateAbbr(),
      });

    const response = await request(app).post('/sessions').send({
      id: ongResponse.body.id,
    });

    expect(response.status).toBe(200);
  });

  it('should not be able to log the ONG in if it has been provided a valid id', async () => {
    const ongResponse = await request(app)
      .post('/ongs').send({
        name: faker.company.companyName(),
        email: faker.internet.email(),
        whatsapp: '81900001212',
        city: faker.address.city(),
        uf: faker.address.stateAbbr(),
      });

    const response = await request(app).post('/sessions').send({
      id: `${ongResponse.body.id}asd`,
    });

    expect(response.status).toBe(400);
  });
});
