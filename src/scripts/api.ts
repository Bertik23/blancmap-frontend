export function hello(someone){
    console.log(`hello ${someone}`)
}

const API_BASE = "http://localhost:5000"

export async function search(query: string){
    const response = await fetch(API_BASE+`/api/searchObject?query=${query}`)
    const rJson = await response.json()
    return rJson.data
}