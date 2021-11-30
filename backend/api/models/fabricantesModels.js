const conexao = require('../../config/conexao.js');

module.exports = {
    getAllFabricantes,
    getByIdFabricantes,
    editarFabricantes,
    novoFabricante 
}

function getAllFabricantes (callback) {
    conexao.query('select * from fabricantes', callback)
}

function getByIdFabricantes (id, callback) {
    conexao.query('select * from fabricantes WHERE fab_codigo = ' + id, callback)
}

function novoFabricante(dados, callback) {
    var msql = 'INSERT INTO fabricantes SET ? ';

	conexao.query(msql, dados, callback);
}

function editarFabricantes(dados, callback) {
    console.log('Alterando o fabricantes { M O D E L } .......' + dados);

    var msql = "UPDATE fabricantes SET fab_nome = '" + dados.fab_nome + 
    "' , fab_fantasia = '" + dados.fab_fantasia +     
    "' , fab_pais      = '" + dados.fab_pais +  
    "'  WHERE fab_codigo  = '" + dados.fab_codigo + "'";

    console.log(msql);
    
    conexao.query(msql, callback);
}

