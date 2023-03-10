import React from 'react';
import { useParams } from 'react-router-dom';

export default function CountryDetails({ countries }) {

  const { countryId } = useParams();
  const foundCountry = countries.find((oneCountry) => {
    return oneCountry.alpha3Code === countryId;
  });

  return (
    <div>
      <h2>{foundCountry.name.common}</h2>
      <h4>Capital: {foundCountry.capital}</h4>
      <h4>Area: {foundCountry.area} km²</h4>
      <ul>
        {(foundCountry.borders).map((elem, i) => {
          return (
            <li className='country-details' key={elem}>{elem}</li>
          )
        })}
      </ul>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt="country-flag" />
    </div>
  )
}
