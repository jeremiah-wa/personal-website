import { useEffect, useState } from "react"

export function useRepo(id) {
    const [repo, setRepo] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/repositories/${id}`, {method : "GET"})
        .then(response => response.json())
        .then(repo => {
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
        })
        .then(res => setRepo(res))
        .catch(err => setError(error))
    }, [id])

    return {repo, error}
}
