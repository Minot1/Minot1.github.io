import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NoobsCTF from './pages/NoobsCTF';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/n00bz' element={<NoobsCTF></NoobsCTF>}></Route>
    </Routes>
  );
}

export default App;
