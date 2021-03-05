/* eslint-disable no-undef */
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

describe('Testing server ping', () => {
  it('It should respond with a message', () => {
    request(app).get('/').expect({
      status: 200,
      message: 'Welcome to A-Maze-ingly Retro Route Puzzle App'
    });
  });
});

describe('Testing server routes rooms', () => {
  it('It should retrieve a list of rooms', async () => {
    request(app)
      .get('/rooms')
      .expect({
        status: 200,
        rooms: [
          {
            id: 1,
            name: 'Hallway',
            north: 2,
            south: null,
            west: null,
            east: null,
            objects: [],
            createdAt: '2021-03-05T18:10:03.262Z',
            updatedAt: '2021-03-05T18:10:03.262Z'
          },
          {
            id: 2,
            name: 'Dining Room',
            north: null,
            south: 1,
            west: 3,
            east: 4,
            objects: [],
            createdAt: '2021-03-05T18:10:03.262Z',
            updatedAt: '2021-03-05T18:10:03.262Z'
          },
          {
            id: 3,
            name: 'Kitchen',
            north: null,
            south: null,
            west: null,
            east: 2,
            objects: [
              {
                name: 'Knife'
              }
            ],
            createdAt: '2021-03-05T18:10:03.262Z',
            updatedAt: '2021-03-05T18:10:03.262Z'
          },
          {
            id: 4,
            name: 'Sun Room',
            north: null,
            south: null,
            west: 2,
            east: null,
            objects: [
              {
                name: 'Potted Plant'
              }
            ],
            createdAt: '2021-03-05T18:10:03.262Z',
            updatedAt: '2021-03-05T18:10:03.262Z'
          }
        ],
        message: 'Room lists retrieved successfully'
      });
  });

  it('It should create a new room with no objects', async () => {
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
      .expect({
        status: 201,
        room: {
          id: 5,
          name: 'Hallway',
          south: null,
          north: 2,
          west: null,
          east: null,
          objects: [],
          updatedAt: '2021-03-05T18:04:43.520Z',
          createdAt: '2021-03-05T18:04:43.520Z'
        },
        message: 'Room 5 created successfully'
      });
  });

  it('It should create a new room with objects', async () => {
    request(app)
      .post('/room')
      .send({
        name: 'Hallway',
        north: 2,
        south: null,
        west: null,
        east: null,
        objects: [
          {
            name: 'Potted Plant'
          }
        ]
      })
      .expect({
        status: 201,
        room: {
          id: 5,
          name: 'Hallway',
          south: null,
          north: 2,
          west: null,
          east: null,
          objects: [
            {
              name: 'Potted Plant'
            }
          ],
          updatedAt: '2021-03-05T18:04:43.520Z',
          createdAt: '2021-03-05T18:04:43.520Z'
        },
        message: 'Room 5 created successfully'
      });
  });

  it('It should update room', async () => {
    request(app)
      .put('/room/5')
      .send({
        name: 'Dining Room',
        south: 2,
        west: 3
      })
      .expect({
        status: 200,
        room: {
          id: 5,
          name: 'Dining Room',
          north: 2,
          south: 2,
          west: 3,
          east: null,
          objects: null,
          createdAt: '2021-03-05T18:04:43.520Z',
          updatedAt: '2021-03-05T18:06:09.677Z'
        },
        message: 'Room 5 updated successfully'
      });
  });

  it('It should delete room', async () => {
    request(app).delete('/room/5').expect({
      status: 200,
      message: 'Room 5 deleted successfully'
    });
  });
});

describe('Testing server routes objects', () => {
  it('It should retrieve a list of objects', async () => {
    request(app)
      .get('/objects')
      .expect({
        status: 200,
        objects: [
          {
            id: 1,
            name: 'Knife',
            createdAt: '2021-03-05T18:10:03.263Z',
            updatedAt: '2021-03-05T18:10:03.263Z'
          },
          {
            id: 2,
            name: 'Potted Plant',
            createdAt: '2021-03-05T18:10:03.263Z',
            updatedAt: '2021-03-05T18:10:03.263Z'
          },
          {
            id: 3,
            name: 'Pillow',
            createdAt: '2021-03-05T18:10:03.263Z',
            updatedAt: '2021-03-05T18:10:03.263Z'
          }
        ],
        message: 'Object lists retrieved successfully'
      });
  });

  it('It should create a new object', async () => {
    request(app)
      .post('/object')
      .send({
        name: 'Potted Plant'
      })
      .expect({
        status: 201,
        object: {
          id: 4,
          name: 'Potted Plant',
          updatedAt: '2021-03-05T18:08:10.964Z',
          createdAt: '2021-03-05T18:08:10.964Z'
        },
        message: 'Object 4 created successfully'
      });
  });

  it('It should update object', async () => {
    request(app)
      .put('/object/4')
      .send({
        name: 'Pillow'
      })
      .expect({
        status: 200,
        object: {
          id: 4,
          name: 'Pillow',
          createdAt: '2021-03-05T18:10:35.105Z',
          updatedAt: '2021-03-05T18:11:14.829Z'
        },
        message: 'Object 4 updated successfully'
      });
  });

  it('It should delete object', async () => {
    request(app).delete('/object/4').expect({
      status: 200,
      message: 'Object 4 deleted successfully'
    });
  });
});
