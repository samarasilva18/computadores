import React from "react"
import './Fabricantes.css';

import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaFabricantes";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Fabricantes() {
  const [fabricantes, setFabricantes] = useState([])
  
  useEffect(() => {
    urlapi.get('fabricantes')
      .then(response => setFabricantes(response.data));
  }, []
  )

  return (
    <>
        <div id="idFabricantes" className="fabricantes">
          <div id="corpo_rel">
            <legend> Registros dos Fabricantes Cadastrados</legend>
            <Link to="/fabricantes/0" value={'I'}>Incluir Novo Fabricante</Link>

            <div>

              <Tabela
                items={fabricantes}
                chave={'/fabricantes/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Fabricantes;

