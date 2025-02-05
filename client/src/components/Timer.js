import { useState, useEffect } from "react"

export function Timer({ onTimeUp, difficulty = "medium" }) {
    let duration

    switch (difficulty) {
        case "easy":
            duration = 15
            break
        case "hard":
            duration = 30
            break
        default:
            duration = 20
            break
    }

    const [timeLeft, setTimeLeft] = useState(duration)

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp()
            return
        }

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [timeLeft, onTimeUp])

    return (
        <div>
            <b>Time Left: {timeLeft}</b>
        </div>
    )
}
