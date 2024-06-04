import React, { useEffect, useState } from 'react';
import { Card, TitleContent } from './Card';
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
    <Card>
      <TitleContent extraClass={'cardRowsCenter'}>
        <h2># {nome}</h2>
      </TitleContent>
      <div className="participantes">
        <div className="cardRows cardRowsCol infos">
          <h2 className="mobH2"># Qtd de Cotas</h2>
          <h2>{cota}</h2>
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
