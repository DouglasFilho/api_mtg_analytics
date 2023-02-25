require("dotenv").config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({
    message:'Ola, bem vindo!'
  })
});

mongoose.set("strictQuery", true);

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@mtg-analytics.uoglgts.mongodb.net/mtg_cards?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port, () => {
      console.info(`Aplicação rodando em http://localhost/${port}`)
    })
  })
  .catch(() => {
    console.info('Erro ao conectar ao banco!')
  });