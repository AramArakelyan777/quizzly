import "./App.css"
import { Routes, Route } from "react-router-dom"
import { StartScreen } from "./components/StartScreen"
import { Quiz } from "./components/Quiz"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<StartScreen />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
        </div>
    )
}

export default App
