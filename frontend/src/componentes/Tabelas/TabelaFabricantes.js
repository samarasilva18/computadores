import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {
      return (
      <tr className={i % 2 === 0 ? "par" : "impar"} key={item.fab_codigo}>
        <td> {item.fab_codigo} </td>
        <td> {item.fab_nome} </td>
        <td> {item.fab_fantasia} </td>
        <td> {item.fab_pais} </td>

        <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.fab_codigo} > Editar </a></td>
        <td> <Link to={props.chave + item.fab_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

        <td> <i className="bi bi-trash"></i> </td>
      </tr>
    )
      })
}

return (
  <div className="tabela">
    <table id="tabela" className="table table-hover">
      <thead id="cabecalho_rel">
        <tr style={{ textAlign: 'auto' }}>
          <th scope="col"> Código </th>
          <th scope="col"> Nome </th>
          <th scope="col"> Fantasia </th>
          <th scope="col"> País </th>
          <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Novo Fabricante</a></th>
        </tr>
      </thead>
      <tbody>
        {getLinhas()}
      </tbody>
    </table>
  </div>
  )

}