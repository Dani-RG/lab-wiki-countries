import React from 'react'
import { Link } from 'react-router-dom'

export default function CountriesList({ countries }) {

  return (
    <div>
      <ul>
        {countries.map(elem => {
          return (
            <li className='countries-list' key={elem.name.official}>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`} alt='countryflag' />
              <Link to={`/${elem.alpha3Code}`}>{elem.name.common}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
