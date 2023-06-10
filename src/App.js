import { Route, Routes } from 'react-router-dom';
import './App.css';
import n00bzCTFpage from './n00bzCTFpage';

function App() {
  return (
    <Routes>
      <Route path='*' element={<n00bzCTFpage></n00bzCTFpage>}></Route>
    </Routes>
  );
}

export default App;
