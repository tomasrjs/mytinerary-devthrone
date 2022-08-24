import HomePage from './pages/HomePage';
import CitiesPage from './pages/CitiesPage';
import NewCitiesPage from './pages/NewCitiesPage';
import { Route, Routes } from 'react-router-dom';
import WebsiteLayout from './layouts/WebsiteLayout';
function App() {
  return (
    <WebsiteLayout>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/cities' element={<CitiesPage />}></Route>
        <Route path='/newCities' element={<NewCitiesPage />}></Route>
      </Routes>
    </WebsiteLayout>
  );
}

export default App;
