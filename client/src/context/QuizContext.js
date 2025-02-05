import { createContext, useReducer } from "react"

export const QuizContext = createContext(null)

const initialState = {
    questions: [],
    loading: true,
    error: "",
    currentIndex: 0,
    score: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_QUESTIONS":
            return { ...state, questions: action.payload.questions }

        case "SET_ERROR":
            return { ...state, error: action.payload.error }

        case "SET_LOADING":
            return { ...state, loading: action.payload.loading }

        case "SET_SCORE":
            return { ...state, score: action.payload.score }

        case "SET_CURRENT_INDEX":
            return { ...state, currentIndex: action.payload.currentIndex }

        case "RESET_QUIZ":
            return { ...initialState }

        default:
            return state
    }
}

export function QuizContextProvider({ children }) {
    const [quizState, dispatchQuizState] = useReducer(reducer, initialState)

    return (
        <QuizContext.Provider value={{ quizState, dispatchQuizState }}>
            {children}
        </QuizContext.Provider>
    )
}
