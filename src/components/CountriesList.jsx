import React from 'react'
import { Link } from 'react-router-dom'

export default function CountriesList({ countries }) {

  return (
    <div className="container text-center">
      <ul className="list-group rounded-0">
        {countries.map(elem => {
          return (
            <li className="list-group-item" key={elem.name.official}>
              <div className="row container d-flex align-items-center">
               <div>
                 <img src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`} alt='countryflag' className="w-25" />
                </div>
                <div>
                 <Link to={`/${elem.alpha3Code}`}>{elem.name.common}</Link>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
