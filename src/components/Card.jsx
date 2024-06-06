import React, { useEffect } from 'react';
import '../assets/css/Card.css';
import { Link } from 'react-router-dom';

const Card = ({ children }) => {
  return (
    <div className="cardMain animeLeft">
      <div className="cardTitle">
        <h1 className="mobH1">Bolão Quina de São João</h1>
      </div>
      <div className="cardContent">{children}</div>
    </div>
  );
};

const TitleContent = ({ children, extraClass }) => {
  return <div className={`cardRows ${extraClass}`}>{children}</div>;
};

const Participante = ({ url, img, nome, cota, reportCota, total }) => {
  useEffect(() => {
    reportCota(cota);
  }, [cota]);

  return (
    <Link
      to={url}
      state={{ name: nome, cotas: cota, ctotal: total }}
      className="cardPart"
    >
      <img
        src={img}
        className="amounguinho"
        width={40}
        height={49.41}
        alt="Amoung Us"
      />
      <h3>{nome}</h3>
    </Link>
  );
};

export { Card, TitleContent, Participante };
