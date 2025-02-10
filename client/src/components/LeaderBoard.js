import { useLocation, useNavigate } from "react-router-dom"
import { sendLeaderData } from "../service/sendLeaderDataService"
import { useEffect, useState } from "react"
import { getLeaderboard } from "../service/getLeaderboard"

export function LeaderBoard() {
    const { state } = useLocation()
    const navigate = useNavigate()
    const username =
        state?.username || localStorage.getItem("username") || "Guest"
    const score = state?.score || localStorage.getItem("score") || 0
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        async function sendData() {
            try {
                await sendLeaderData(username, score).catch(console.log)
            } catch (error) {
                console.log(error)
            }
        }

        sendData()
    }, [score, username])

    useEffect(() => {
        getLeaderboard()
            .then((result) => setLeaderboard(result.leaderboard))
            .catch(console.log)
    }, [])

    if (score !== 0 && !score)
        return (
            <div>
                <h1>You haven't played yet.</h1>
                <button onClick={() => navigate("/quiz")}>Start a quiz</button>
            </div>
        )

    return (
        <div>
            <h1>
                Total score of {username}: {score}
            </h1>
            <button onClick={() => navigate("/")}>
                Return to the start page
            </button>
            <h2>Leaderboard</h2>
            {leaderboard.map((leader) => (
                <div key={leader.id}>
                    <span>
                        Username: {leader.username} | Score: {leader.score}
                    </span>
                </div>
            ))}
        </div>
    )
}
