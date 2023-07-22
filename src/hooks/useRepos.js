import { useEffect, useState } from "react"

export function useRepos() {
    const [repos, setRepos] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://api.github.com/users/jeremiah-wa/repos', {method : "GET"})
        .then(response => response.json())
        .then(repos => repos.filter(repo =>  (
                // Which repos to show criteria
                repo.fork === false
                && repo.private === false
            ))
            // from the filtered repos what I want returned
            .map(repo => ({ 
                    id : repo.id,
                    title: repo.name,
                    description: repo.description,
                    link: repo.html_url,
                    topics: repo.topics, 
                    language: repo.language
                })
            )
        )
        .then(res => setRepos(res))
        .catch(err => setError(err))
    }, [])

    return {repos, error}
}
