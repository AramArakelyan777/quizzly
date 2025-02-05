import { makeRequest } from "./makeRequest"

export function getQuiz() {
    return makeRequest("/quiz")
}
