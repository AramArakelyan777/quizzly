import "./App.css"
import { Routes, Route } from "react-router-dom"
import { StartScreen } from "./components/StartScreen"
import { Quiz } from "./components/Quiz"
import { LeaderBoard } from "./components/LeaderBoard"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<StartScreen />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/leaderboard" element={<LeaderBoard />} />
            </Routes>
        </div>
    )
}

export default App
