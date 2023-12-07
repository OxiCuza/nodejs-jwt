import BadRequest from "../middleware/bad-request.js";
import "dotenv/config.js";
import jwt from "jsonwebtoken"

export default class AuthController {
    login (req, res, next) {
        const {username, password} = req.body

        if (! username || ! password) {
            throw new BadRequest('Please provide valid username and password')
        }

        const id = new Date().getDate()
        const token = jwt.sign({id, username}, process.env.SECRET_JWT, {expiresIn: '1h'})

        res.status(200).json({
            msg: 'user created',
            token: token
        })
    }

    dashboard (req, res, next) {
        const luckyNumber = Math.floor(Math.random() * 100)

        res.status(200).json({
            msg: `Hello ${req.user.username}`,
            secret: `Here is your authorized data your number is ${luckyNumber}`
        })

    }
}