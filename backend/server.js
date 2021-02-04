const express = require('express')
const peoples = require('./data/peoples')

// Initialize express with variable app
const app = express()

// Test My API 
app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/peoples', (req, res) =>{
 res.json(peoples)
})

app.get('/api/peoples/:id', (req, res) =>{
    const people = peoples.find((p) => p._id === req.params.id)
    res.json(people)
   })

app.listen(5000, console.log('Server is running on port 5000'))