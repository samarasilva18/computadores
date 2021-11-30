const models = require('../models/fabricantesModels.js');

module.exports = {
    fabricantesGetAll,
    fabricantesGetById,
    fabricantesNovo,
    fabricantesEditar      
}

function fabricantesGetAll(req, res) {
    console.log('Listar Fabricantes {M O D E L}');
    models.getAllFabricantes(function(err, resposta) {
        console.log('Retorno de Fabricantes {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function fabricantesGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado Get: ' + id);
    models.getByIdFabricantes(id, function(err, resposta) {
        console.log('Retorno de Fabricantes Id {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function fabricantesNovo(req, res) {
    var dados = req.body;
    console.log("Gravando novo registro de Fabricantes...");
    console.log(req.body);
    dados.fab_codigo = null;
    console.log("Inserindo novo registro de Fabricantes...");
    models.novoFabricante(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/fabricantes');
    })
}


function fabricantesEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando o registro de Fabricantes...", dados);

    models.editarFabricantes(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/fabricantes');
    });
}