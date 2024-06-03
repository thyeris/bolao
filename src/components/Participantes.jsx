import React, { useEffect, useState } from 'react';
import '../assets/css/Card.css';
import { Link, NavLink } from 'react-router-dom';
import amoung01 from '../assets/images/amoung01.webp';
import amoung02 from '../assets/images/amoung02.webp';
import amoung03 from '../assets/images/amoung03.webp';
import amoung04 from '../assets/images/amoung04.webp';
import amoung05 from '../assets/images/amoung05.webp';
import amoung06 from '../assets/images/amoung06.webp';
import amoung07 from '../assets/images/amoung07.webp';
import amoung08 from '../assets/images/amoung08.webp';
import amoung09 from '../assets/images/amoung09.webp';
import amoung10 from '../assets/images/amoung10.webp';
import amoung11 from '../assets/images/amoung11.webp';
import amoung12 from '../assets/images/amoung12.webp';

const Participantes = () => {
  const [ctotais, setCtotais] = useState(0);

  useEffect(() => {
    document.querySelectorAll('.cardPart').forEach((e) => {
      const getUrl = e.getAttribute('href');
      var getCota = Number(
        getUrl
          .substring(getUrl.indexOf('&') + 1, getUrl.lastIndexOf('&'))
          .replace(/\D/g, ''),
      );
      setCtotais((ctotais) => ctotais + getCota);
    });
  }, []);

  return (
    <div className="cardMain animeLeft">
      <div className="cardTitle">
        <h1 className="mobH1">Bolão Quina de São João</h1>
      </div>
      <div className="cardContent">
        <div className="cardRows cardRowsCenter">
          <h2 className="mobH1"># Participantes</h2>
        </div>
        <div className="participantes cardRowsCol">
          <Link to={`thyeris?n=thyeris&c=4&t=${ctotais}`} className="cardPart">
            <img
              src={amoung01}
              className="amounguinho"
              width={40}
              height={49.41}
              alt="Amoung Us"
            />
            <h3>Thyeris</h3>
          </Link>
        </div>
        <NavLink to="/bolao" className="btnMain" end>
          VOLTAR
        </NavLink>
      </div>
    </div>
  );
};

export default Participantes;
