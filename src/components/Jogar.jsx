import React, { useState } from 'react';
import { Card, TitleContent } from './Card';
import qrcode from '../assets/images/qrcode.webp';
import { NavLink } from 'react-router-dom';

const Jogar = () => {
  const [valor, setValor] = useState('R$ 2,50');
  const [count, setCount] = useState(1);

  return (
    <Card>
      <TitleContent extraClass={'cardRowsCol'}>
        <div>
          <h2 className="mobH2"># Valor da Cota</h2>
          <h2 className="valorCota">{valor}</h2>
        </div>
        <div className="text-right">
          <h2 className="mobH2"># Qtd</h2>
          <div className="qtdCalc">
            <button
              onClick={() => {
                if (count > 1) {
                  setCount((count) => count - 1);
                  setValor((valor) =>
                    (2.5 * (count - 1)).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    }),
                  );
                }
              }}
            >
              -
            </button>
            <h2>{count}</h2>
            <button
              onClick={() => {
                setCount((count) => count + 1);
                setValor((valor) =>
                  (2.5 * (count + 1)).toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }),
                );
              }}
            >
              +
            </button>
          </div>
        </div>
      </TitleContent>
      <img
        src={qrcode}
        width={190}
        height={190}
        alt="Qr Code"
        className="qrcode"
      />
      <button
        className="btnMain btnPix"
        onClick={() => {
          navigator.clipboard.writeText(
            '00020126660014br.gov.bcb.pix0117thyeris@gmail.com0223Bolao Quina de Sao Joao5204000053039865802BR5922THYERIS LIMA DOS ANJOS6007ARACAJU62580520SAN2024060202471085050300017br.gov.bcb.brcode01051.0.063043D8E',
          );
          document.querySelector('.btnPix').innerText = 'CHAVE PIX COPIADA';
        }}
      >
        COPIAR CHAVE PIX
      </button>
      <NavLink to="/bolao" className="btnMain" end>
        VOLTAR
      </NavLink>
    </Card>
  );
};

export default Jogar;
