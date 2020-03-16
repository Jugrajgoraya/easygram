const knex =  require('../db/client')

module.exports = {

    newUsers: (req, res)=>{
        res.render('users/new.ejs')
    },

    


}