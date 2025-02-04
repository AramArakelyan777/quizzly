import { useState, useEffect } from "react"

export function Timer({ duration = 30, onTimeUp }) {
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
