import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

const shuffleArray = (array) =>
    array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

export function Quiz() {
    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const hasFetched = useRef(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (hasFetched.current) return
        hasFetched.current = true

        fetch(process.env.REACT_APP_QUIZ_API_URL)
            .then((result) => {
                if (!result.ok) throw new Error("Failed to fetch questions.")
                return result.json()
            })
            .then((data) => {
                setQuestions(data)
            })
            .catch((error) => {
                console.error(error)
                setError(error?.message || "Error fetching data")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (questions.length === 0) return <div>No questions available.</div>

    const question = questions[currentIndex]
    const allAnswers = shuffleArray([
        question.correctAnswer,
        ...question.incorrectAnswers,
    ])

    const handleAnswerClick = (answer) => {
        if (answer === question.correctAnswer)
            setScore((prevScore) => prevScore + 1)

        if (currentIndex < questions.length - 1)
            setCurrentIndex((prevIndex) => prevIndex + 1)
        else navigate("/")
    }

    return (
        <div>
            <h4>Score: {score}</h4>
            <h2>
                {currentIndex + 1}) {question.question.text}
            </h2>
            {allAnswers.map((answer) => (
                <button key={answer} onClick={() => handleAnswerClick(answer)}>
                    {answer}
                </button>
            ))}
        </div>
    )
}
