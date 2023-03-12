import React from 'react';
import { useParams } from 'react-router-dom';

export default function CountryDetails({ countries }) {

  const { countryId } = useParams();
  const foundCountry = countries.find((oneCountry) => {
    return oneCountry.alpha3Code === countryId;
  });

  return (
    <div className="fixed-right position-fixed ms-5">
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt="country-flag" />
      <h1>{foundCountry.name.common}</h1>
      <table>
        <tbody>
          <tr>
            <td>Capital:</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area:</td>
            <td>{foundCountry.area} km²</td>
          </tr>
          <tr>
            <td>Borders:</td>
            <td>
              <ul className="list-unstyled"> 
                {(foundCountry.borders).map(elem => {
                  return (
                    <li className='country-details' key={elem}>{elem}</li>
                  )
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
