import './App.css'
import Home from './pages/home';
import Favorites from './pages/favorites';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
      <>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favorites' element={<Favorites />}/>
        </Routes>
      </main>
      </>
  );
}



export default App
