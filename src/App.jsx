import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:pokemonName' element={<PokemonDetails />} />
      </Routes>
    </>
  )
}

export default App;