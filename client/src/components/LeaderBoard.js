import { useLocation, useNavigate } from "react-router-dom"

export function LeaderBoard() {
    const { state } = useLocation()
    const navigate = useNavigate()

    return (
        <div>
            <h1>Your total score: {state.score}</h1>
            <button onClick={() => navigate("/")}>
                Return to the start page
            </button>
        </div>
    )
}
