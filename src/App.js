import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Accueil from './component/Accueil';
import Detailcours from './component/detailcours';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Accueil /> } />
        <Route path="/detail" element={ <Detailcours /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
