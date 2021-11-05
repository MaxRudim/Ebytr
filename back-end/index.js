const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Controller = require('./src/controllers/todo');

const corsOptions = {
  origin: 'http://localhost:3000',
};

const app = express();
app.use(bodyParser.json());
const port = 3001;

app.use(cors(corsOptions));

app.post('/task', Controller.createController);
app.get('/task', Controller.getAllController);
app.get('/task/:id', Controller.findByIdController);
app.put('/task/:id', Controller.updateController);
app.delete('/task/:id', Controller.removeController);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
