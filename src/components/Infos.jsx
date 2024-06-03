import React, { useEffect, useState } from 'react';
import '../assets/css/Card.css';
import { NavLink, useParams } from 'react-router-dom';

const Infos = () => {
  const { id } = useParams();
  const [nome, setNome] = useState();
  const [cota, setCota] = useState();
  const [porc, setPorc] = useState();
  const [videal, setVideal] = useState();
  const [vexpec, setVexpec] = useState();
  const [vreal, setVreal] = useState();

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const nomeUrl = queryParameters.get('n').includes('-')
      ? queryParameters.get('n').replace('-', ' ')
      : queryParameters.get('n');
    const cotaUrl = queryParameters.get('c');
    const cotaTotal = queryParameters.get('t');
    setNome((nome) => nomeUrl);
    setCota((cota) => cotaUrl);
    setPorc((porc) => ((cotaUrl * 100) / cotaTotal).toFixed(2));
    setVreal((vreal) =>
      (2.5 * cotaUrl).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }),
    );
    setVideal((videal) =>
      ((220000000 / Number(cotaTotal)) * Number(cotaUrl)).toLocaleString(
        'pt-br',
        {
          style: 'currency',
          currency: 'BRL',
        },
      ),
    );
    setVexpec((vexpec) =>
      ((22000000 / Number(cotaTotal)) * Number(cotaUrl)).toLocaleString(
        'pt-br',
        {
          style: 'currency',
          currency: 'BRL',
        },
      ),
    );
  }, [id]);

  return (
    <div className="cardMain animeLeft">
      <div className="cardTitle">
        <h1 className="mobH1">Bolão Quina de São João</h1>
      </div>
      <div className="cardContent">
        <div className="cardRows cardRowsCenter">
          <h2># {nome}</h2>
        </div>
        <div className="participantes">
          <div className="cardRows cardRowsCol infos">
            <h2># Qtd de Cotas</h2>
            <h2>{cota}</h2>
          </div>
          <div className="cardRows cardRowsCol infos">
            <h2># % do Prêmio</h2>
            <h2>{porc}%</h2>
          </div>
          <div className="cardRows cardRowsCol infos">
            <h2># Valor Ideal</h2>
            <h2>{videal}</h2>
          </div>
          <div className="cardRows cardRowsCol infos">
            <h2># Expectativa</h2>
            <h2>{vexpec}</h2>
          </div>
          <div className="cardRows cardRowsCol infos">
            <h2># Realidade</h2>
            <h2>- {vreal}</h2>
          </div>
        </div>
        <NavLink to="/participantes" className="btnMain">
          VOLTAR
        </NavLink>
      </div>
    </div>
  );
};

export default Infos;
