const bcrypt = require('bcryptjs')

module.exports = {
    async register(req, res){
        const db = req.app.get('db')
        const {username, password} = req.body
        const profile_pic = `https://robohash.org/${username}`
        // Does user exist?
        const user = await db.find_username(username)
        // If they do then tell them to log in
        if(user[0]) return res.status(200).send({message: 'Username already in use'})
        // Otherwise salt and hash the password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        // Store their info in the database
        const [userId] = await db.create_user({username, password: hash, profile_pic})
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
    },
    async getPosts(req, res){
        const db = req.app.get('db')
        const {id} = req.params
        const {userposts, search} = req.query
        const posts = await db.all_post_info()
        // console.log(posts)
        if (userposts === 'true' && search !== ''){
            let newArr = posts.filter(el => el.title.includes(search))
            res.status(200).send(newArr)
        } else if (userposts === 'false' && search === ''){
            let newArr = posts.filter(el => el.author_id !== +id)
            res.status(200).send(newArr)
        } else if (userposts === 'false' && search !== ''){
            let newArr = posts.filter(el => el.author_id !== +id)
            let newArr1 = newArr.filter(el => el.title.includes(search))
            res.status(200).send(newArr1)
        } else if (userposts === 'true' && search === ''){
            res.status(200).send(posts)
        } else {
            res.status(200).send(posts)
        }
    }
}

/* 
// http://localhost:5001/api/posts?queryname=query
// http://localhost:5001/api/posts?title=Test 
*/
// el.username