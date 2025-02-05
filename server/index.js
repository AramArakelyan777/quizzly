import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import router from "./router/index.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
    })
)

app.use("/api", router)

const start = () => {
    try {
        app.listen(PORT, async () => {
            console.log(`Server started on port ${PORT}.`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
