const express = require('express')
const { users } = require('../controllers')

const router = express.Router()

router.post('/', (req, res) => {
    const 
    { firstname,
      lastname,
      email,
      password,
      passwordConfirmation
    } = req.body
    if (password === passwordConfirmation) {
      res.send(`
      Thanks for signing up ${firstname} ${lastname}! We'll make sure we keep your password: ${password} and email: ${email} safe!
      `)
    } else {
      res.render('users/new.ejs')
    }
  })
  
router.get('/new', users.newUsers)

module.exports = router