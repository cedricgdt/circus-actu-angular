const express = require('express');
const api = express();
const connection = require('./config');
const bodyParser = require('body-parser');
// const pKey = require('./pKey');
// const sha256 = require('sha256');
// const jwt = require('jsonwebtoken');

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: false}));
api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
  next();
})

connection.connect((err) => {
  if (err) throw err;
  console.log('MySql connected...');
});

//---------------------------------------------------------------------mes routes-------------------------------------------------------------------------------------
api.get('/api/articles', (req, res) => {
  connection.query('SELECT articles.*, admins.first_name, admins.last_name, admins.picture_admin, admins.describtion_admin, admins.age, admins.ville from articles INNER JOIN admins ON articles.autor = admins.id_admin', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des articles');
    } else {
      res.json(results);
    }
  });
});

api.get('/api/articles/:id', (req, res) => {
  console.log(req.params.id);
  connection.query('SELECT articles.*, admins.first_name, admins.last_name, admins.picture_admin, admins.describtion_admin, admins.age, admins.ville from articles INNER JOIN admins ON articles.autor = admins.id_admin WHERE articles.id_article = ?', req.params.id, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des articles');
    } else {
      res.json(results);
    }
  });
});

api.post('/api/articles', (req, res) => {
  const formData = req.body;
  console.log(formData);
  connection.query('INSERT INTO articles SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un article");
    } else {
      res.sendStatus(200);
    }    
  });
});

api.put('/api/articles/:id', (req, res) => {
  const formData = req.body;
  const idModif = req.params.id;
  console.log(formData);
  console.log(idModif);
  connection.query('UPDATE articles SET ? WHERE id_article = ?', [formData, idModif], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un article");
    } else {
      res.sendStatus(200);
    }    
  });
});

api.delete('/api/articles/:id', (req, res) => {
  const idDelete = req.params.id;
  console.log(idDelete);
  
  connection.query('DELETE FROM articles WHERE id_article = ?', idDelete, err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un article");
    } else {
      res.sendStatus(200);
    }
  });
});



//---------------------------------------------------------------------listen--------------------------------------------------------------------------------------
api.listen(8000, (err) => {
  if(err) throw err;
  console.log('API running...');
});