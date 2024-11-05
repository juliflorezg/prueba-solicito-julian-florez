import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Page from './components/Page'
import TabComponent from './components/TabComponent'

function App() {

  return (
    <>

      <Router>
        <TabComponent tabs={["episodes", "locations", "characters"]} />
        <Routes>
          <Route path="/episodes" element={<Page endpoint="api-rick-morty/episodes?page=1" listName="episodes" />} />
          <Route path="/locations" element={<Page endpoint="api-rick-morty/locations?page=1" listName="locations" />} />
          <Route path="/characters" element={<Page endpoint="api-rick-morty/characters?page=1" listName="characters" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
