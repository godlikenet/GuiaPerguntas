const express = require("express");
const app = express();

//Apontando ao Express o EJS como view engine 
app.set('view engine','ejs');

app.get("/:nome/:lang",(req,res)   => {

    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;

    var produtos = [
        {nome:"Doritos", preco: 3.14},
        {nome: "Coca-cola", preco: 5},
        {nome: "Pasta de Amendoim", preco: 25},
        {nome: "Carne", preco: 15},
        {nome: "Redbull", preco: 6}

    ]


    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "FAEL",
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos

    });

});

app.listen(8080, () =>{console.log("App rodando!");});