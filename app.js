const express = require('express')
const Joi = require('joi')
const { validateSignup } = require('./validator')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>')
})

app.post('/signup', (req, res) => {
  const { error, value } = validateSignup(req.body)

  if (error) {
    console.log(error)
    return res.send(error.message)
  }
  res.send('successfully signed up')
  res.json({ message: 'Post created successfully' })
})

app.listen(4000, () => {
  console.log('server started on port 4000')
})
