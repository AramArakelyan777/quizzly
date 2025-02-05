import { useLocation, useNavigate } from "react-router-dom"

export function LeaderBoard() {
    const { state } = useLocation()
    const navigate = useNavigate()

    if (!state?.score)
        return (
            <div>
                <h1>You haven't played yet.</h1>
                <button onClick={() => navigate("/quiz")}>Start a quiz</button>
            </div>
        )

    return (
        <div>
            <h1>Your total score: {state.score}</h1>
            <button onClick={() => navigate("/")}>
                Return to the start page
            </button>
        </div>
    )
}
