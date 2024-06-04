import React from 'react';
import { Card, TitleContent } from './Card';
import quina from '../assets/images/quina.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Card>
      <TitleContent extraClass={'cardRowsCenter'}>
        <h2># Prêmio Estimado</h2>
        <h2 className="valorTotal">R$ 220.000.000,00</h2>
      </TitleContent>
      <img src={quina} width={220} height={154} alt="Quina" className="quina" />
      <NavLink to="jogar" className="btnMain">
        JOGAR
      </NavLink>
      <NavLink to="participantes" className="btnMain">
        PARTICIPANTES
      </NavLink>
      <button className="btnMain" disabled>
        RESULTADO
      </button>
    </Card>
  );
};

export default Home;
