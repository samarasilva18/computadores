const conexao = require('../../config/conexao.js');

module.exports = {
    getAllComputadores,
    getByIdComputadores,
    editarComputadores,
    novoComputador            
}

function getAllComputadores (callback) {
    conexao.query('select * from computadores', callback)
}

function getByIdComputadores (id, callback) {
    conexao.query('select * from computadores WHERE cmp_codigo = ' + id, callback)
}

function novoComputador(dados, callback) {
    var msql = 'INSERT INTO computadores SET ? ';

	conexao.query(msql, dados, callback);
}

function editarComputadores(dados, callback) {
    console.log('Estou alterando o computadores { M O D E L } .......' + dados);

    var msql = "UPDATE computadores SET cmp_modelo = '" + dados.cmp_modelo + 
    "' , cmp_tipo = '" + dados.cmp_tipo +     
    "' , cmp_memoria      = '" + dados.cmp_memoria + 
    "' , cmp_garantia     = '" + dados.cmp_garantia +
    "' , fab_codigo     = '" + dados.fab_codigo + 
    "'  WHERE cmp_codigo  = '" + dados.cmp_codigo + "'";

    console.log(msql);
    
    conexao.query(msql, callback);
}

