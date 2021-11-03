const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 3000;

app.get('/', (_req, res) => res.send('Hello World!'));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});