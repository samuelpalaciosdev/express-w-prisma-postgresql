require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Routers
const taskRouter = require('./routes/taskRoutes')
// Extra packages
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/tasks', taskRouter)
app.get('/', (req, res) => {
  res.status(200).send('Home page')
})

const start = async () => {
  try {
    await prisma.$connect()
    app.listen(port, () => {
      console.log(`Server listening on port: ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
