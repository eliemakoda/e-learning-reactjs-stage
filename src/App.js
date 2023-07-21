import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import "./component/assets/css/bootstrap.min.css";
import "./component/assets/css/all.min.css";
import "./component/assets/css/style.css";
import "./component/assets/css/bootstrap.min.css";
import "./component/assets/css/all.min.css";
import "./component/assets/css/owl.carousel.min.css";
import "./component/assets/css/owl.carousel.css";
import "./component/assets/css/style.css";
import Accueil from './Accueil';
import Cours from './component/Comp/Cours';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Accueil /> } />
        <Route path="/detail" element={ <Cours /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
