const models = require('../models/computadoresModels.js');

module.exports = {
    computadoresGetAll,
    computadoresGetById,
    computadoresNovo,
    computadoresEditar
}

function computadoresGetAll(req, res) {
    console.log('Listar Computadores {M O D E L}');
    models.getAllComputadores(function (err, resposta) {
        console.log('Retorno de Computadores {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function computadoresGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado Get: ' + id);
    models.getByIdComputadores(id, function (err, resposta) {
        console.log('Retorno de Computadores Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function computadoresNovo(req, res) {
    var dados = req.body;
    console.log("Gravando novo registro de Computadores...");
    console.log(req.body);
    dados.cmp_codigo = null;
    console.log("Inserindo novo registro de Computadores...");
    models.novoComputador(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/computadores');
    })
}


function computadoresEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando o registro de Computadores...", dados);

    models.editarComputadores(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/computadores');
    });
}


