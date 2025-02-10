import { Router } from "express"
import quizController from "../controllers/quizController.js"
import LeaderboardController from "../controllers/leaderboardController.js"

const router = new Router()

router.get("/quiz", quizController.getQuiz)
router.post("/leaderboard-data", LeaderboardController.registerUserData)
router.get("/leaderboard", LeaderboardController.getLeaderboard)

export default router
