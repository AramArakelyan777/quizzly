import dotenv from "dotenv"
import axios from "axios"

dotenv.config()

class QuizController {
    async getQuiz(req, res) {
        try {
            const result = await axios.get(process.env.QUIZ_API_URL)
            if (result.status !== 200)
                throw new Error("Failed to fetch questions.")

            res.status(200).send({ data: result.data })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: error?.message || "Error" })
        }
    }
}

export default new QuizController()
