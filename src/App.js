import { Route, Routes } from 'react-router-dom';
import './App.css';
import WriteupsPage from './WriteupsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<WriteupsPage></WriteupsPage>}></Route>
    </Routes>
  );
}

export default App;
