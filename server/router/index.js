import { Router } from "express"
import quizController from "../controllers/quizController.js"
import leaderboardController from "../controllers/leaderboardController.js"

const router = new Router()

router.get("/quiz", quizController.getQuiz)
router.post("/leaderboard-data", leaderboardController.registerUserData)

export default router
