import React from "react"
import './Computadores.css';

import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaComputadores";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Computadores() {
  const [computadores, setComputadores] = useState([])
  
  useEffect(() => {
    urlapi.get('computadores')
      .then(response => setComputadores(response.data));
  }, []
  )

  return (
    <>
        <div id="idComputadores" className="computadores">
          <div id="corpo_rel">
            <legend> Registros dos Computadores Cadastrados</legend>
            <Link to="/computadores/0" value={'I'}>Incluir Novo Computador</Link>

            <div>

              <Tabela
                items={computadores}
                chave={'/computadores/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Computadores;

