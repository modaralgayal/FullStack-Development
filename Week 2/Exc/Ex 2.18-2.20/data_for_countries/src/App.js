import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

const App = () => {
  
  const [capital, setCapital] = useState(null)
  const [area, setArea] = useState(null)
  const [languages, setLanguages] = useState([])
  const [country, setCountry] = useState(null)
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState([])


  useEffect(() => {
    console.log('effect run, country is now', country)

    if (country) {
      console.log(`spying on ${country}...`)

      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
        .then(response => {
          setCapital(response.data.capital)
          setArea(response.data.area)
          setLanguages(response.data.languages)
        })


    }
  }, [country])

  const handleChange = (event) => {
    setCountry(event.target.value)
    setFiltered(
      countries.filter((country) => {
        country.name.common.toLowercase().includes(event.target.value.toLowerCase)
      })
    )
  }

  const onSearch = (event) => {
    event.preventDefault()
    setCountry(country)
  }

  const handleFiltering = (country) => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setCountries(response.data)
        setFiltered(...countries)
      })
  }


  return (
    <div>
      <form onSubmit={onSearch}>
        find countries: <input onChange={handleChange}/>
        

      </form>
    </div>
  )



  

}

export default App;