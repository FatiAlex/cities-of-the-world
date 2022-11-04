const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let citiesMock = require('./data/cities.mock');
let count = citiesMock.length;

const app = express();
const port = 3000;

// create application/json parser
const jsonParser = bodyParser.json();

app.use(
  cors({
    origin: '*',
  }),
);

app.get('/', (req, res) => {
  res.send('Express mock server');
});

// City - Delete
app.delete('/api/v1/posts/:id', (req, res) => {
  const id = req.params.id;

  citiesMock = citiesMock.filter((city) => id != city.id);

  setTimeout(() => {
    res.sendStatus(204);
  }, 10);
});

// City - Create
app.post('/api/v1/posts', jsonParser, (req, res) => {
  const date = new Date().toISOString();

  const newCity = {
    ...req.body,
    id: ++count,
    created_at: date,
    updated_at: date,
  };

  citiesMock.unshift(newCity);

  setTimeout(() => {
    res.sendStatus(201);
  }, 10);
});

// City - Edit
app.put('/api/v1/posts/:id', jsonParser, (req, res) => {
  const date = new Date().toISOString();

  const oldCity = citiesMock.find((city) => city.id == req.body.id);

  const newCity = { ...oldCity, ...req.body, updated_at: date };

  citiesMock = citiesMock.map((obj) =>
    req.body.id === obj.id ? newCity : obj,
  );

  setTimeout(() => {
    res.sendStatus(200);
  }, 10);
});

// City - Detail
app.get('/api/v1/posts/:id', jsonParser, (req, res) => {
  const id = req.params.id;

  const city = citiesMock.find((city) => city.id == id);

  setTimeout(() => {
    res.json(city);
  }, 10);
});

// Cities - List
app.get('/api/v1/posts', (req, res) => {
  setTimeout(() => {
    res.json(citiesMock);
  }, 200);
});

app.listen(port, () => {
  console.log(`Express mock server listening on port: ${port}`);
});
