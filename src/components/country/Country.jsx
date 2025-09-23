import React from 'react';
import './country.css'
import { useState } from 'react';


const Country = ({country, handleVisitedCountries}) => {

    const [visited, setVisited] = useState(false);

    //console.log(country); 



    function handleVisited(){
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (<>
        <div className={`card card-design ${visited && 'backAqua'} `}>
            <img className="img" src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>{country.name.common}</h3>
            <p className="population">
                Total Population : {country.population.population}
            </p>
            <p className="capital">Capital : {country.capital.capital}</p>

            <button className = {`visitedButn ${visited && 'green'}`} onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
            
        </div>
        </>
    );
};

export default Country;