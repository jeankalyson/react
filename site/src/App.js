import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './home';
import Noticias from './noticias';
import Projeto from './Projeto';
import Fetch from './fetch';
import Contatos from './Contatos';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fetch" element={<Fetch />} />
      <Route path="/contatos" element={<Contatos />} />
      <Route path="home" element={<Home />} />
      <Route path="noticias" element={<Noticias />} />
      <Route path="Projeto" element={<Projeto />} />
    </Routes>
    </>
  );
}

export default App;
