const app = require('express')()
const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const connection = require('./db/connection')
const AppRouter = require('./routes/AppRouter')


const PORT = process.env.PORT || 3001
const helmet = require('helmet')
// Initialize Middleware
app.use(logger('dev'))
app.use(cors())
app.use(helmet({ contentSecurityPolicy: false }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/', (req, res) => res.send({ msg: 'Server Working' }))
app.use('/api', AppRouter)
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
// )

app.listen(PORT, async () => {
  try {
    await connection
    console.log('Database Connected')
    console.log(`App listening on port: ${PORT}`)
  } catch (error) {
   console.log(error)
  }
})
