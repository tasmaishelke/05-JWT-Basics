const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')


const login = async (req, res) =>
    {
        // const username = req.body.username
        // const password = req.body.password
        const {username, password}  = req.body
        if (!username || !password)
            {
                throw new CustomAPIError('Please provide email and pass',400)
            }

        const id = new Date().getDate()
        const token = jwt.sign({id, username}, process.env.JWT_SECRET,{expiresIn:'30d'})

        res.status(200).json({ msg : 'user created', token})

    }

const dashboard = async (req,res) => 
    {
        console.log(req.user);
        const luckynumber = Math.floor(Math.random()*100)

        res.status(200).json(
            {
                msg : `heelo, ${req.user.username}`,
                secret : `here is data your num is ${luckynumber}`
            })
    }

module.exports = 
{
    login, dashboard
}