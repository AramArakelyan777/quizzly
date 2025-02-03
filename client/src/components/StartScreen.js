import { useNavigate } from "react-router-dom"

export function StartScreen() {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Welcome to Quizzly!</h1>
            <p>
                Here you can test your skills and expand your knowledge in
                various aspects.
            </p>
            <p>
                At the end of a quiz, you will be able to compare your results
                with other players.
            </p>
            <p>
                <b>Please note</b>: you can't think of the answers too much,
                there is a timer on each question. Happy quizzing!
            </p>
            <button
                onClick={() => {
                    navigate("/quiz")
                }}
            >
                Start playing
            </button>
        </div>
    )
}
