import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Cookie from "js.cookie";
import ProductPage from './pages/ProductPage';

function App() {
  Cookie.set('isLogged', false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/product" element={ <ProductPage/> } />

        <Route path="*" element={ <NotFoundPage/> } />
      </Routes>
    </div>
  )
}

export default App;
