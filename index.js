const express = require('express')
const app = express()

//Middleware para leitura
app.use(
  express.urlencoded({
    extended: true,
  })
)

//Endpoints
app.get('/', (req, res) => {
  res.json({
    message:'Ola, bem vindo!'
  })
})

//Porta disponibilizada para chamada da api
app.listen(3000)