import './App.css';
//import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
      setCountries(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() =>{
    getCountries();
  }, [] );

  return (
    <div className="App">
      <Navbar />
      <div className="container px-4 text-center mt-5">
        <div className="row gx-5">
          <div className="col container mt-5">
            <CountriesList className="p-3 " countries={countries}/>
          </div>
          <div className="col container mt-5">
            <Routes  className="p-3">
              <Route path="/:countryId" element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
