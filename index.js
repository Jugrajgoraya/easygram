const express = require('express')
const logger = require('morgan')
const usersRouter = require('./routes/grams')
// const knex = require('./db/client')

const app = express();

app.use(express.urlencoded({extended: true}))
app.use('/', usersRouter)
app.use(logger('dev'))

app.set('view engine', 'ejs')
app.set('views', 'views')

// app.get('/', (req, res) => {
//   res.render('welcome')
// })

// app.get('/grams', (req,res)=>{
//   knex.select('*').from('grams')
//       .then(grams => {
//         res.render('users/index', { grams })
//       })
// })

// app.get('/users/new', (req, res) => {
//   res.render('users/new.ejs')
// })

// app.post('/users', (req, res) => {
  // const 
  // { firstname,
  //   lastname,
  //   email,
  //   password,
  //   passwordConfirmation
  // } = req.body
//   if (password === passwordConfirmation) {
//     res.send(`
//     Thanks for signing up ${firstname} ${lastname}! We'll make sure we keep your password: ${password} and email: ${email} safe!
//     `)
//   } else {
//     res.render('users/new.ejs')
//   }
// })

const PORT = 7000
const DOMAIN = 'localhost'

app.listen(PORT, DOMAIN, () => {
  console.log(`Listening on ${DOMAIN}:${PORT}`)
})