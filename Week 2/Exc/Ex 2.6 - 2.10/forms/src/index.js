import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import axios from 'axios'

const promise = axios.get('http://localhost:3001/persons')
console.log(promise)

promise.then(response => {
    console.log(response)
})

axios
    .get('http://localhost:3001/persons')
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log('fail')
    })

ReactDOM.createRoot(document.getElementById("root")).render(<App />)