import React from "react"
import './ComputadoresEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link} from "react-router-dom";

export default function ComputadoresEditar() {
    let idBoolean = false;        // Edição

    const [codigo, setCodigo] = useState(0);

    const [modelo, setModelo] = useState('');
    const [tipo, setTipo] = useState('');
    const [memoria, setMemoria] = useState('');
    const [garantia, setGarantia] = useState('');
    const [fabcodigo, setFabcodigo] = useState('');

    const [checked, setChecked] = useState(false);

    const { idComputador } = useParams();

    function IfCrud() {
        console.log('Id Computador: ' + idComputador + ' - ' + idBoolean)
        if (idComputador === 0) {
            idBoolean = true;
        } else {
        }
    }

    useEffect(() => {
        async function getComputadores() {
            console.log('Computador: ' + idComputador + ' - ' + idBoolean)
            if (idComputador == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                const { data } = await urlapi.get('/computadores/' + idComputador);
                console.log(data)

                setCodigo(data[0].cmp_codigo);

                setModelo(data[0].cmp_modelo);
                setTipo(data[0].cmp_tipo);
                setMemoria(data[0].cmp_memoria);
                setGarantia(data[0].cmp_garantia);

                setFabcodigo(data[0].fab_codigo);

                console.log(data[0].cpm_modelo)
            }
        }
        IfCrud();
        getComputadores();
    }, []);

    async function handleComputadores(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.cmp_modelo);

        try {
            if (modelo.length === 0) {
                alert('Insira uma descrição do modelo')
            } else {
                console.log("Codigo Computador: ",idComputador)
                if (idComputador == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('computadores', data);
                } else {
                    console.log("Alteração de Registro! ",idComputador)
                    await urlapi.put('/computadores/' + idComputador, data);
                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--computador" onSubmit={handleComputadores} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="integer" className="form-control"
                                name="cmp_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Descrição do Modelo do Computador </label>
                            <input type="text" className="form-control" name="cmp_modelo"
                                id="cmp_modelo"
                                value={modelo}
                                onChange={e => setModelo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Tipo </label>
                            <input type="text" className="form-control" name="cmp_tipo"
                                id="cmp_tipo"
                                value={tipo}
                                onChange={e => setTipo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Memória </label>
                            <input type="text" className="form-control" name="cmp_memoria"
                                id="cmp_memoria"
                                value={memoria}
                                onChange={e => setMemoria(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Garantia </label>
                            <input type="integer" className="form-control" name="cmp_garantia"
                                id="cmp_garantia"
                                value={garantia}
                                onChange={e => setGarantia(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Fabricante </label>
                            <input type="integer" className="form-control" name="fab_codigo"
                                id="fab_codigo"
                                value={fabcodigo}
                                onChange={e => setFabcodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/computadores" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
