import React, { useState } from 'react';
import { Card, TitleContent, Participante } from './Card';
import { NavLink } from 'react-router-dom';
import amoung01 from '../assets/images/amoung01.webp'; // Rei amarelo
import amoung02 from '../assets/images/amoung02.webp'; // Azul
import amoung03 from '../assets/images/amoung03.webp'; // Cowboy marron
import amoung04 from '../assets/images/amoung04.webp'; // Verde banana-hat
import amoung05 from '../assets/images/amoung05.webp'; // Laranja medico
import amoung06 from '../assets/images/amoung06.webp'; // Ciano placa-wet
import amoung07 from '../assets/images/amoung07.webp'; // Rosa pai-filho
import amoung08 from '../assets/images/amoung08.webp'; // Cartola preto
import amoung09 from '../assets/images/amoung09.webp'; // Verde policial
import amoung10 from '../assets/images/amoung10.webp'; // Vermelho cozinheiro
import amoung11 from '../assets/images/amoung11.webp'; // Branco boat-hat
import amoung12 from '../assets/images/amoung12.webp'; // Roxo balão

const Participantes = () => {
  const [totalCota, setTotalCota] = useState(0);

  const handleReportCota = (cota) => {
    setTotalCota((prevTotal) => prevTotal + cota);
  };

  return (
    <Card>
      <TitleContent extraClass={'cardRowsCenter'}>
        <h2># Participantes</h2>
      </TitleContent>
      <div className="participantes cardRowsCol">
        <Participante
          url={'aryane'}
          img={amoung01}
          nome={'Aryane'}
          cota={1}
          reportCota={handleReportCota}
          total={totalCota}
        />
        <Participante
          url={'amanda'}
          img={amoung02}
          nome={'Amanda'}
          cota={1}
          reportCota={handleReportCota}
          total={totalCota}
        />
        <Participante
          url={'ana'}
          img={amoung03}
          nome={'Ana'}
          cota={1}
          reportCota={handleReportCota}
          total={totalCota}
        />
        <Participante
          url={'bruno'}
          img={amoung04}
          nome={'Bruno'}
          cota={1}
          reportCota={handleReportCota}
          total={totalCota}
        />
        <Participante
          url={'jeff'}
          img={amoung05}
          nome={'Jeff'}
          cota={1}
          reportCota={handleReportCota}
          total={totalCota}
        />
        <Participante
          url={'joao'}
          img={amoung06}
          nome={'João'}
          cota={1}
          reportCota={handleReportCota}
          total={totalCota}
        />
        <Participante
          url={'lais'}
          img={amoung07}
          nome={'Lais'}
          cota={1}
          reportCota={handleReportCota}
          total={totalCota}
        />
        <Participante
          url={'rafaela'}
          img={amoung08}
          nome={'Rafaela'}
          cota={1}
          reportCota={handleReportCota}
          total={totalCota}
        />
        <Participante
          url={'thyeris'}
          img={amoung09}
          nome={'Thyeris'}
          cota={1}
          reportCota={handleReportCota}
          total={totalCota}
        />
      </div>
      <NavLink to="/bolao" className="btnMain" end>
        VOLTAR
      </NavLink>
    </Card>
  );
};

export default Participantes;
