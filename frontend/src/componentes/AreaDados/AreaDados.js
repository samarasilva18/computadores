import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Computadores from '../Computadores/Computadores';
import ComputadoresEditar from '../Computadores/ComputadoresEditar';
import Fabricantes from '../Fabricantes/Fabricantes';
import FabricantesEditar from '../Fabricantes/FabricantesEditar';

import './AreaDados.css';
 
export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/computadores" component={Computadores}></Route>
        <Route exact path="/computadores/:idComputador" component={ComputadoresEditar}></Route>
        <Route exact path="/fabricantes" component={Fabricantes}></Route>
        <Route exact path="/fabricantes/:idFabricante" component={FabricantesEditar}></Route>
      </Switch>

    </div>
  );
}

