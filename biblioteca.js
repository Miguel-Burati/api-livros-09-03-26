const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Serv Iniciado');
})

let livros = [
  {
    "id": 1,
    "titulo": "Dom Casmurro"
  },
  {
    "id": 2,
    "titulo": "Grande Sertão: Veredas"
  },
  {
    "id": 3,
    "titulo": "O Alquimista"
  },
  {
    "id": 4,
    "titulo": "Cem Anos de Solidão"
  },
  {
    "id": 5,
    "titulo": "A Revolução dos Bichos"
  },
  {
    "id": 6,
    "titulo": "Teste"
  }
]

app.get('/', (req, res) => {
    res.json({'message' : 'Testeeeee'});
})

app.get('/livros', (req, res) => {
    res.json(livros);   
})