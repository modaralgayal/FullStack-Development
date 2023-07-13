const express = require('express')
const app = express()
const morgan = require("morgan")
const baseUrl = '/api/persons'

app.use(express.json())
app.use(express.static('build'))

morgan.token('body', (req) => JSON.stringify(req.body));
app.use(morgan(":method :url :status :response-time ms - :body"))


let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  const today = new Date();
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'long'
  };

  const formattedDateTime = today.toLocaleString('en-US', options);
  console.log(formattedDateTime);

  response.send(`
        <div>
            <p>Phonebook has info for ${persons.length} people</p><br/>
            <p>${formattedDateTime}</p>
        </div>
    `)
})


app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  response.json(person)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})


app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(persons => persons.id !== id)

  response.status(204).end()
})


const generateId = () => {
  return Math.floor(Math.random() * 50000000)
}

app.post('/api/persons', (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'Name or number missing'
    });
  } else if (persons.some(person => person.name === body.name)) {
    return response.status(400).json({ error: 'Name must be unique' });
  } else if (!body.number) {
    return response.status(400).json({ error: 'Number is missing' });
  }

  const start = Date.now()

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(person);
  const end = Date.now(); // End time
  const responseTime = end - start; // Calculate response time

  response.setHeader('X-Response-Time', `${responseTime}ms`)

  response.json(person);
});



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})