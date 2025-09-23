
import './App.css'
import Countries from './components/countries/Countries'
import { Suspense } from 'react'

function App() {

  const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res=>res.json());
  

  return (
    <>
    <div className="body-align"> 
    <h1>Country</h1>
    <p>From sources across the web</p>


    <div className="countries-list">

      <Suspense fallback={<h3>Countries Data Loading.......</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </div>
      
    </div>
      
  
    </>
  )
}

export default App
