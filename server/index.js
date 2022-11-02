const express = require('express');
const cors = require('cors');
const citiesMock = require('./data/cities.mock');

const app = express();
const port = 3000;

app.use(
  cors({
    origin: '*',
  }),
);

app.get('/', (req, res) => {
  res.send('Express mock server');
});

app.get('/api/v1/posts', (req, res) => {
  res.json(citiesMock);
});

app.listen(port, () => {
  console.log(`Express mock server listening on port: ${port}`);
});
