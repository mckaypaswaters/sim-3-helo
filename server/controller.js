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
    async login(req, res){
        const db = req.app.get('db')
        const {username, password} = req.body

        // Check if the username exists
        const user = await db.find_username(username)
        // If they don't exist send response
        if (!user[0]) return res.status(200).send({message: 'Username not found'})
        // Hash password and compare
        const result = bcrypt.compareSync(password, user[0].password)
        // If hashes don't match, send response
        if (!result) return res.status(200).send({message: 'Incorrect password!'})
        // If they do match, send it to the front end
        res.status(200).send({message: 'Logged in!', user: user})
    }
}