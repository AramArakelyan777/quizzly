import { useEffect, useRef, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Timer } from "./Timer"
import { QuizContext } from "../context/QuizContext"
import { getQuiz } from "../service/quizService"

const shuffleArray = (array) =>
    array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

export function Quiz() {
    const { quizState, dispatchQuizState } = useContext(QuizContext)
    const navigate = useNavigate()
    const hasFetched = useRef(false)

    useEffect(() => {
        if (hasFetched.current) return
        hasFetched.current = true

        const quiz = getQuiz()

        quiz.then((result) => {
            dispatchQuizState({
                type: "SET_QUESTIONS",
                payload: { questions: result.data },
            })
        })
            .catch((error) => {
                console.log(error)
                dispatchQuizState({
                    type: "SET_ERROR",
                    payload: { error: error?.message || "Error" },
                })
            })
            .finally(() => {
                dispatchQuizState({
                    type: "SET_LOADING",
                    payload: { loading: false },
                })
            })
    }, [dispatchQuizState])

    if (quizState.loading) return <div>Loading...</div>
    if (quizState.error) return <div>{quizState.error}</div>
    if (quizState.questions.length === 0)
        return <div>No questions available.</div>

    const question = quizState.questions[quizState.currentIndex]
    const allAnswers = shuffleArray([
        question.correctAnswer,
        ...question.incorrectAnswers,
    ])

    const handleAnswerClick = (answer) => {
        if (answer === question.correctAnswer)
            dispatchQuizState({
                type: "SET_SCORE",
                payload: { score: quizState.score + 1 },
            })

        if (quizState.currentIndex < quizState.questions.length - 1)
            dispatchQuizState({
                type: "SET_CURRENT_INDEX",
                payload: { currentIndex: quizState.currentIndex + 1 },
            })
        else
            navigate("/leaderboard", {
                state: {
                    score:
                        answer === question.correctAnswer
                            ? quizState.score + 1
                            : quizState.score,
                },
            })
    }

    return (
        <div>
            <h4>Score: {quizState.score}</h4>
            <Timer
                key={quizState.currentIndex}
                onTimeUp={() => handleAnswerClick(null)}
                difficulty={question.difficulty}
            />
            <h2>
                {quizState.currentIndex + 1}. {question.question.text}
            </h2>
            {allAnswers.map((answer) => (
                <button key={answer} onClick={() => handleAnswerClick(answer)}>
                    {answer}
                </button>
            ))}
        </div>
    )
}
