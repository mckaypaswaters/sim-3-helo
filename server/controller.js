const bcrypt = require('bcryptjs')

module.exports = {
    register(req, res){
        const db = req.app.get('db')
        const {username, password} = req.body
        // Does user exist?
        // If they do then tell them to log in
        // Otherwise salt and hash the password
        // Store their info in the database
        // Send it to the front end
        
    },
    login(req, res){
        const db = req.app.get('db')
        const {username, password} = req.body
        const user = db.find_user([username, password])
        if(!user[0]) {
            return res.status(200).send({message: 'Incorrect username'})
        } else {
            return res.status(200).send({message: 'Logged in!', user})
        }
    }
}