import "dotenv/config.js"
import jwt from "jsonwebtoken"
import Unauthorized from "../middleware/unauthorized.js";

export const authMiddleware = (req, res, next) => {
    const {authorization} = req.headers

    if (! authorization || ! authorization.startsWith('Bearer ')) {
        throw new Unauthorized('No token provided')
    }

    const token = authorization.split(' ')[1]

    try {
        req.user = jwt.verify(token, process.env.SECRET_JWT)
        
        next()
    } catch (error) {
        throw new Unauthorized('Not authorized to access this route')
    }
}