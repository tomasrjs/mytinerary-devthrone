import HomePage from './pages/HomePage';
import CitiesPage from './pages/CitiesPage';
import NewCitiesPage from './pages/NewCitiesPage';
import { Route, Routes } from 'react-router-dom';
import WebsiteLayout from './layouts/WebsiteLayout';
import ScrollToTop from './components/ScrollToTop';
import UnderConstruction from './pages/UnderConstruction';

function App() {
  return (
    <>
    <ScrollToTop />
    <WebsiteLayout>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/cities' element={<CitiesPage />}></Route>
        <Route path='/newCities' element={<NewCitiesPage />}></Route>
        <Route path='/UnderConstruction' element={<UnderConstruction />}></Route>
      </Routes>
    </WebsiteLayout>
    </>
  );
}

export default App;
