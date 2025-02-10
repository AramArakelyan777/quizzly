import { makeRequest } from "./makeRequest"

export function getLeaderboard() {
    return makeRequest("/leaderboard")
}
