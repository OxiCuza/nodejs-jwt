import express from "express";
import "dotenv/config.js";
import { errorHandler } from "./middleware/error-handler.js";
import { routeNotFound } from "./middleware/route-not-found.js";
import authRouter from "./routes/auth-route.js";

const app = express()
const port = process.env.PORT || 3000

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1', authRouter)
app.use(routeNotFound)
app.use(errorHandler)

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`app listing on port ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()