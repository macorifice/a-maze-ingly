/* eslint-disable no-undef */
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

describe('Testing server ping', () => {
  test('It should respond with a message', () => {
    request(app)
      .get('/')
      .expect(200);
  });
});

describe('Testing server routes rooms', () => {
  it('should create a new room', async () => {
    request(app)
      .post('/room')
      .send({
        name: 'Hallway',
        north: 2,
        south: null,
        west: null,
        east: null,
        objects: []
      })
      .expect(201);
  });

  it('should update room', async () => {
    request(app)
      .put('/room/1')
      .send({
        name: 'Dining Room',
        south: 2,
        west: 3
      })
      .expect(200);
  });

  it('should delete room', async () => {
    request(app)
      .delete('/room/1')
      .expect(200);
  });
});

describe('Testing server routes objects', () => {
  it('should create a new object', async () => {
    request(app)
      .post('/object')
      .send({
        name: 'Potted Plant'
      })
      .expect(201);
  });

  it('should update object', async () => {
    request(app)
      .put('/object/1')
      .send({
        name: 'Pillow'
      })
      .expect(200);
  });

  it('should delete object', async () => {
    request(app)
      .delete('/object/1')
      .expect(200);
  });
});
