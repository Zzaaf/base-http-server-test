const express = require('express');

// инициализация приложения 'app'
const app = express();
// условное формирование порта
const PORT = process.env.PORT ?? 3000;
// псевдо данные, имитация БД
const mockData = [];

// обработчики HTTP запросов
app.get('/', (req, res) => {
  res.status(200).send('HTTP server is working!');
});

app.get('/users', (req, res) => {
  res.status(200).json({
    data: mockData,
    error: null,
  });
});

// прослушивание порта приложения
app.listen(PORT, () => {
  console.log(`Listening at ${PORT} port`);
});
