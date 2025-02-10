import pool from "../db/db.js"

class LeaderBoardController {
    async registerUserData(req, res) {
        try {
            const { username, score } = req.body

            if (!username || score === undefined) {
                return res
                    .status(400)
                    .json({ message: "Username and score are required" })
            }

            const query = `
                INSERT INTO leaders_table (username, score)
                VALUES ($1, $2)
                ON CONFLICT (username)
                DO UPDATE SET score = GREATEST(leaders_table.score, EXCLUDED.score)
                RETURNING *;
            `

            const values = [username, score]
            const result = await pool.query(query, values)

            return res.status(201).json({
                message: "Score updated successfully",
                data: result.rows[0],
            })
        } catch (error) {
            console.error("Error while updating leaderboard:", error)
            res.status(500).json({ message: "Internal server error" })
        }
    }

    async getLeaderboard(req, res) {
        try {
            const result = await pool.query(
                "SELECT username, score FROM leaders_table ORDER BY score DESC LIMIT 10"
            )

            return res.status(200).json({
                message: "Leaderboard fetched successfully",
                leaderboard: result.rows,
            })
        } catch (error) {
            console.error("Error fetching leaderboard:", error)
            res.status(500).json({ message: "Internal server error" })
        }
    }
}

export default new LeaderBoardController()
