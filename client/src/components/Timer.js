import { useState, useEffect } from "react"

export function Timer({ onTimeUp, difficulty = "medium" }) {
    let duration = 30

    switch (difficulty) {
        case "easy":
            duration = 15
            break
        case "medium":
            duration = 25
            break
        case "hard":
            duration = 35
            break
        default:
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
