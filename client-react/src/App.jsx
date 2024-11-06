import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Page from './components/Page'
import TabComponent from './components/TabComponent'
import GlobalDataContext from './store/globalDataContext';
import { useState } from 'react';
import FavoritesPage from './components/FavoritesPage';
import CharacterInfoPage from './components/CharacterInfoPage';

function App() {


  return (
    <>
      <GlobalDataContext.Provider value={useState({ favorites: [] })}>
        <Router>
          <TabComponent tabs={["episodes", "locations", "characters", "favorites"]} />
          <Routes>
            <Route path="/episodes" element={<Page endpoint="api-rick-morty/episodes?page=1" listName="episodes" />} />
            <Route path="/locations" element={<Page endpoint="api-rick-morty/locations?page=1" listName="locations" />} />
            <Route path="/characters" element={<Page endpoint="api-rick-morty/characters?page=1" listName="characters" />} />
            <Route path="/character/:id" element={<CharacterInfoPage endpoint="api-rick-morty/character" />} />

            <Route path="/favorites" element={<FavoritesPage listName="favorites" />} />
          </Routes>
        </Router>
      </GlobalDataContext.Provider>
    </>
  )
}

export default App
