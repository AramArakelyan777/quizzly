import "./App.css"
import { Routes, Route } from "react-router-dom"
import { StartScreen } from "./components/StartScreen"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<StartScreen />} />
            </Routes>
        </div>
    )
}

export default App
