import { Router } from "express"
import quizController from "../controllers/quizController.js"

const router = new Router()

router.get("/quiz", quizController.getQuiz)

export default router
