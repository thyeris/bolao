import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import particlesJson from './assets/particles.json';
import './assets/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Participantes from './components/Participantes.jsx';
import Infos from './components/Infos.jsx';
import Home from './components/Home.jsx';
import Jogar from './components/Jogar.jsx';

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  return (
    <>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particlesJson}
      />
      <img
        src="https://particles.js.org/images/cyan_amongus.png"
        alt="Amoung us"
        className="amoungUs"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/bolao" element={<Home />} />
          <Route path="/bolao/jogar" element={<Jogar />} />
          <Route path="/bolao/participantes" element={<Participantes />} />
          <Route path="/bolao/participantes/:id" element={<Infos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
