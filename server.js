const express = require('express')
const app = express()
const users = require('./db')
const bodyParser = require('body-parser')

const port = process.env.PORT || 5500;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', (req, res) => {
    users.push(req.body)
    res.status(201).json("User Add !!")
})