import { useNavigate } from "react-router-dom"
import { QuizContext } from "../context/QuizContext"
import { useContext, useState } from "react"

export function UserName() {
    const [username, setUsername] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { dispatchQuizState } = useContext(QuizContext)

    const resetQuiz = () => {
        dispatchQuizState({ type: "RESET_QUIZ" })
        navigate("/quiz", { state: { username } })
    }

    return (
        <div>
            {error ? <div>{error}</div> : null}
            <input
                type="text"
                value={username}
                onChange={(evt) => {
                    evt.preventDefault()
                    setUsername(evt.target.value.trim())
                }}
            />
            <button
                onClick={() => {
                    if (username) resetQuiz()
                    else setError("Please enter a username")
                }}
            >
                Let's go!
            </button>
        </div>
    )
}
