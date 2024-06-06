import React, { useEffect, useState } from 'react';
import { Card, TitleContent } from './Card';
import { NavLink, useLocation } from 'react-router-dom';

const Infos = () => {
  const location = useLocation();
  const { name, cotas, ctotal } = location.state;

  const [porc, setPorc] = useState(0);
  const [videal, setVideal] = useState(0);
  const [vexpec, setVexpec] = useState(0);
  const [vreal, setVreal] = useState(0);

  useEffect(() => {
    setPorc((porc) => ((cotas * 100) / ctotal).toFixed(2));
    setVreal((vreal) =>
      (2.5 * cotas).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }),
    );
    setVideal((videal) =>
      ((220000000 / Number(ctotal)) * cotas).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }),
    );
    setVexpec((vexpec) =>
      ((22000000 / Number(ctotal)) * cotas).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }),
    );
  });

  return (
    <Card>
      <TitleContent extraClass={'cardRowsCenter'}>
        <h2># {name}</h2>
      </TitleContent>
      <div className="participantes">
        <div className="cardRows cardRowsCol infos">
          <h2 className="mobH2"># Qtd de Cotas</h2>
          <h2>{cotas}</h2>
        </div>
        <div className="cardRows cardRowsCol infos">
          <h2 className="mobH2"># % do Prêmio</h2>
          <h2>{porc}%</h2>
        </div>
        <div className="cardRows cardRowsCol infos">
          <h2 className="mobH2"># Valor Ideal</h2>
          <h2>{videal}</h2>
        </div>
        <div className="cardRows cardRowsCol infos">
          <h2 className="mobH2"># Expectativa</h2>
          <h2>{vexpec}</h2>
        </div>
        <div className="cardRows cardRowsCol infos">
          <h2 className="mobH2"># Realidade</h2>
          <h2>- {vreal}</h2>
        </div>
      </div>
      <NavLink to="/bolao/participantes" className="btnMain">
        VOLTAR
      </NavLink>
    </Card>
  );
};

export default Infos;
