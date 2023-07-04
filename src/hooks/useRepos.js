import { useEffect, useState } from "react"

export function useRepos() {
    const [repos, setRepos] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://api.github.com/users/jeremiah-wa/repos', {method : "GET"})
        .then(response => response.json())
        .then(repos => {
            const filteredRepos =  repos.filter(res =>  res.fork === false)
            return Promise.all(filteredRepos.map(repo => {
                return fetch(`https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/${repo.default_branch}/README.md`, {method: "GET"})
                .then(res => res.ok ? res.text(): null)
                .then(readme => {
                    return {
                        id : repo.id,
                        name: repo.name,
                        description: repo.description,
                        html_url: repo.html_url,
                        created_at: repo.created_at,
                        updated_at: repo.updated_at,
                        readme: readme
                    }
                })
            }))
        })
        .then(res => setRepos(res))
        .catch(err => setError(error))
    }, [])

    return {repos, error}
}
