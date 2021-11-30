import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {
      return (
      <tr className={i % 2 === 0 ? "par" : "impar"} key={item.cmp_codigo}>
        <td> {item.cmp_codigo} </td>
        <td> {item.cmp_modelo} </td>
        <td> {item.cmp_tipo} </td>
        <td> {item.cmp_memoria} </td>
        <td> {item.cmp_garantia} </td>
        <td> {item.fab_codigo} </td>

        <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.cmp_codigo} > Editar </a></td>
        <td> <Link to={props.chave + item.cmp_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

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
          <th scope="col"> Modelo </th>
          <th scope="col"> Tipo </th>
          <th scope="col"> Memória </th>
          <th scope="col"> Garantia </th>
          <th scope="col"> Fabricante </th>
          <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Novo Computador</a></th>
        </tr>
      </thead>
      <tbody>
        {getLinhas()}
      </tbody>
    </table>
  </div>
  )

}