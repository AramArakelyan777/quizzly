import { useLocation, useNavigate } from "react-router-dom"
import { sendLeaderData } from "../service/sendLeaderDataService"
import { useEffect } from "react"

export function LeaderBoard() {
    const { state } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        sendLeaderData(state.username, state.score)
    }, [state.username, state.score])

    if (state?.score !== 0 && !state?.score)
        return (
            <div>
                <h1>You haven't played yet.</h1>
                <button onClick={() => navigate("/quiz")}>Start a quiz</button>
            </div>
        )

    return (
        <div>
            <h1>
                Total score of {state.username}: {state.score}
            </h1>
            <button onClick={() => navigate("/")}>
                Return to the start page
            </button>
        </div>
    )
}
