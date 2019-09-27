const bcrypt = require('bcryptjs')

module.exports = {
    async register(req, res){
        const db = req.app.get('db')
        const {username, password} = req.body
        // Does user exist?
        const user = await db.find_username(username)
        // If they do then tell them to log in
        if(user[0]) return res.status(200).send({message: 'Username already in use'})
        // Otherwise salt and hash the password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        // Store their info in the database
        const [userId] = await db.create_user({username, password: hash})
        // Send it to the front end
        res.status(200).send({message: 'Registered!', user: userId})
        
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