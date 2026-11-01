import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Units from './pages/units/Units'
import UnitDetails from './pages/units/UnitDetails'
import Zones from './pages/zones/Zones'
import ZoneDetails from './pages/zones/ZoneDetails'
import ProjectDetails from './pages/zones/ProjectDetails'
import Developers from './pages/developers/Developers'
import Contactus from './pages/contactus/Contactus'
import DeveloperDetails from './pages/developers/DeveloperDetails'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/units" element={<Units />} />
        <Route path="/units/:id" element={<UnitDetails />} />

        <Route path="/zones" element={<Zones />} />
        <Route path="/zones/:id" element={<ZoneDetails />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />

        <Route path="/developers" element={<Developers />} />
        <Route path="/developers/:id" element={<DeveloperDetails />} />
        
        <Route path="/contactus" element={<Contactus />} />
      </Route>
    </Routes>
  )
}

export default App