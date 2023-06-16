const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


nome = null
ingredientes = null
modoPreparo = null
dificuldade = null
autor = null
data = null


app.get("/", (req, res) => {
  res.send("Bem-vindo ao servidor!");
});

app.get("/dados", (req, res) => {
  res.render("dados", {
    nome: nome !== null ? `${nome}` : 'Nome não definido',
    ingredientes: ingredientes !== null ? `${ingredientes}` : 'ingredientes não definido',
    modoPreparo: modoPreparo !== null ? `${modoPreparo}` : 'modoPreparo não definido',
    dificuldade: dificuldade !== null ? `${dificuldade}` : 'dificuldade não definido',
    autor: autor !== null ? `${autor}` : 'autor não definido',
    data: data !== null ? `${data}` : 'data não definido',
  });
});

app.post("/dados", (req, res) => {
  nome = req.body.nome;
  ingredientes = req.body.ingredientes;
  modoPreparo = req.body.modoPreparo;
  dificuldade = req.body.dificuldade;
  autor = req.body.autor;
  data = req.body.data;

  res.redirect(`/dados?nome=${nome}&ingredientes=${ingredientes}&modoPreparo=${modoPreparo}&dificuldade=${dificuldade}&autor=${autor}&data=${data}`);
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});