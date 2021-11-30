import React from "react"
import './FabricantesEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link} from "react-router-dom";

export default function FabricantesEditar() {
    let idBoolean = false;        // Edição

    const [codigo, setCodigo] = useState(0);

    const [nome, setNome] = useState('');
    const [fantasia, setFantasia] = useState('');
    const [pais, setPais] = useState('');

    const [checked, setChecked] = useState(false);

    const { idFabricante } = useParams();

    function IfCrud() {
        console.log('Id Fabricante: ' + idFabricante + ' - ' + idBoolean)
        if (idFabricante === 0) {
            idBoolean = true;
        } else {
        }
    }

    useEffect(() => {
        async function getFabricantes() {
            console.log('Fabricante: ' + idFabricante + ' - ' + idBoolean)
            if (idFabricante == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                const { data } = await urlapi.get('/fabricantes/' + idFabricante);
                console.log(data)

                setCodigo(data[0].fab_codigo);

                setNome(data[0].fab_nome);
                setFantasia(data[0].fab_fantasia);
                setPais(data[0].fab_pais);

                console.log(data[0].fab_nome)
            }
        }
        IfCrud();
        getFabricantes();
    });

    async function handleFabricantes(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.fab_nome);

        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Código Fabricante: ",idFabricante)
                if (idFabricante === 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('fabricantes', data);
                } else {
                    console.log("Alteração de Registro! ",idFabricante)
                    await urlapi.put('/fabricantes/' + idFabricante, data);
                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--fabricante" onSubmit={handleFabricantes} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="integer" className="form-control"
                                id="fab_codigo"
                                name="fab_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome do Fabricante </label>
                            <input type="text" className="form-control" name="fab_nome"
                                id="fab_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome Fantasia </label>
                            <input type="text" className="form-control" name="fab_fantasia"
                                id="fab_fantasia"
                                value={fantasia}
                                onChange={e => setFantasia(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> País </label>
                            <input type="text" className="form-control" name="fab_pais"
                                id="fab_pais"
                                value={pais}
                                onChange={e => setPais(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/fabricantes" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
