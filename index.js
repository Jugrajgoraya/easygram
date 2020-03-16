const express = require('express')
const logger = require('morgan')
const usersRouter = require('./routes/users')
const gramsRouter = require('./routes/grams')

// const knex = require('./db/client')

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/users', usersRouter)
app.use('/grams', gramsRouter)
app.use(logger('dev'))

app.set('view engine', 'ejs')
app.set('views', 'views')



const PORT = 7000
const DOMAIN = 'localhost'

app.listen(PORT, DOMAIN, () => {
  console.log(`Listening on ${DOMAIN}:${PORT}`)
})