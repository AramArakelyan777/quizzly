import { makeRequest } from "./makeRequest"

export async function sendLeaderData(username, score) {
    try {
        return await makeRequest("/leaderboard-data", {
            method: "POST",
            data: { username, score },
        })
    } catch (error) {
        throw error
    }
}
