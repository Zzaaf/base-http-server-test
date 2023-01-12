const express = require('express');

const app = express();
const todos = [];

app.get('/', (req, res) => {
  res.status(200).json('HTTP server is working!');
});

app.get('/users', (req, res) => {
  res.status(200).json(
    {
      data: todos,
      error: null,
    },
  );
});

app.listen(3000, () => console.log('Listening at port 3000'));
