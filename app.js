const express = require('express');
const path = require('path');

// инициализация приложения 'app'
const app = express();
// условное формирование порта
const PORT = process.env.PORT ?? 3000;
// псевдо данные, имитация БД
const mockData = [];

// обработчики HTTP запросов
app.get('/status', (req, res) => {
  res.status(200).send('HTTP server is working!');
});

app.get('/users', (req, res) => {
  res.status(200).json({
    data: mockData,
    error: null,
  });
});

app.get('/home', (req, res) => {
  const htmlFilePath = path.join(__dirname, '/public/home.html');

  res.sendFile(htmlFilePath);
});

app.get('/css/cover.css', (req, res) => {
  const cssFilePath = path.join(__dirname, '/public/css/cover.css');

  res.sendFile(cssFilePath);
});

app.get('/css/style.css', (req, res) => {
  const cssFilePath = path.join(__dirname, '/public/css/style.css');

  res.sendFile(cssFilePath);
});

app.get('/click', (req, res) => {
  res.redirect('https://elbrusboot.camp/');
});

// прослушивание порта приложения
app.listen(PORT, () => {
  console.log(`Listening at ${PORT} port`);
});
