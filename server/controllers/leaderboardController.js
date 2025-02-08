class LeaderBoardController {
    async registerUserData(req, res) {
        try {
            console.log(req.body)
        } catch (error) {
            console.error("Error while making a leaderboard")
            res.status(500).send({ message: "Internal server error" })
        }
    }
}

export default new LeaderBoardController()
