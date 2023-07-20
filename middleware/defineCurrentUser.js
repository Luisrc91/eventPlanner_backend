const db = require("../models")
const jwt = require('json-web-token');

const { user_data } = db;

async function defineCurrentUser(req, res, next){
    try {
        const [ method, token ] = req.headers.authorization.split(' ')
        if(method == 'Bearer') {
            const result = await jwt.decode(process.env.JWT_SECRET, token)
            const { id } = result.value
            let user = await user_data.findOne({ 
                where: {
                    userId: id
                }
            })
            req.currentUser = user
        }
        next()
    } catch(err){
        req.currentUser = null
        next() 
    }
}

module.exports = defineCurrentUser