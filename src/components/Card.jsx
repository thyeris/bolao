import React from 'react';
import quina from '../assets/images/quina.png';
import '../assets/css/Card.css';
import { NavLink } from 'react-router-dom';

const Card = () => {
  return (
    <div className="cardMain animeLeft">
      <div className="cardTitle">
        <h1 className="mobH1">Bolão Quina de São João</h1>
      </div>
      <div className="cardContent">
        <div className="cardRows cardRowsCenter">
          <h2># Prêmio Estimado</h2>
          <h2 className="valorTotal">R$ 220.000.000,00</h2>
        </div>
        <img
          src={quina}
          width={220}
          height={154}
          alt="Quina"
          className="quina"
        />
        <NavLink to="jogar" className="btnMain">
          JOGAR
        </NavLink>
        <NavLink to="participantes" className="btnMain">
          PARTICIPANTES
        </NavLink>
        <button className="btnMain" disabled>
          RESULTADO
        </button>
      </div>
    </div>
  );
};

export default Card;
