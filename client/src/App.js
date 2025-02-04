import "./App.css"
import { QuizContextProvider } from "./context/QuizContext"
import { Routes, Route } from "react-router-dom"
import { StartScreen } from "./components/StartScreen"
import { Quiz } from "./components/Quiz"
import { LeaderBoard } from "./components/LeaderBoard"

function App() {
    return (
        <div className="App">
            <QuizContextProvider>
                <Routes>
                    <Route path="/" element={<StartScreen />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/leaderboard" element={<LeaderBoard />} />
                </Routes>
            </QuizContextProvider>
        </div>
    )
}

export default App
