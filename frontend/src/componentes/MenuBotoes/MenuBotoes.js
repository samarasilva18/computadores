import './MenuBotoes.css';
import { Link } from 'react-router-dom';

export default function MenuBotoes() {
  return (
    <div className = "menuBotoes">

      <Link to="/computadores"> <button type="button" id="btnComputadores" className="btn btn-primary" href="/computadores"> Computadores </button> </Link>
      <Link to="/fabricantes"> <button type="button" id="btnFabricantes" className="btn btn-primary" href="/fabricantes">Fabricantes</button> </Link>
      
    </div>
  );
}

