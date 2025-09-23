import React from 'react';
import { use } from 'react';
import Country from '../country/Country';
import './countries.css';
import { useState } from 'react';

const Countries = ({countriesPromise}) => {
    //console.log(countries);

    const countriesData = use(countriesPromise);
   

    const countries = countriesData.countries;

    //console.log(countries);


    //visited country record

    const [visitedCounty, setVisitedCountry]  = useState([]);

    const handleVisitedCountries =(country)=>{

        const isAlreadyVisited = visitedCounty.some((c)=>c.cca3 === country.cca3);

        if(isAlreadyVisited){
            const updateList = visitedCounty.filter((c)=>c.cca3 !== country.cca3);

            setVisitedCountry(updateList);
        }else{
            const newVisitedCountries = [...visitedCounty,country ]
            setVisitedCountry(newVisitedCountries);
        }

      

       

        


    }
    return (
        <>
        <div>

            <h3>Total Country : {countries.length}</h3>


    <h2>Visited country List</h2>
    <ul>
        {
            visitedCounty.map(visitedcountry=> <li>{visitedcountry.name.common}</li>)
        }
    </ul>

   
    <p>Total Visited :{visitedCounty.length} </p>
   
    

            <div className="countries-li">
            {
                countries.map(country=> <Country key={country.cca3} 
                                              country={country}
                                              handleVisitedCountries={handleVisitedCountries}
                
                                                 ></Country>)
            }
        
            </div>

           
        </div>
            
        </>
    );
};

export default Countries; 