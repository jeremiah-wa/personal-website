import './Music.css'

export default function Music(){
  return (
    <section id="music">
        <iframe title="Spotify"
        className="SpotifyPlayer"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1Epgj1k8vlOD3o?utm_source=generator&theme=0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        />
    </section>
  )
}
