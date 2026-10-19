import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function CharacterDetail() {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Personaje no encontrado')
        return res.json()
      })
      .then((data) => {
        setCharacter(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p className="message">Cargando personaje...</p>
  if (error) return <p className="message error">⚠️ {error}</p>
  if (!character) return null

  return (
    <div className="character-detail">
      <Link to="/" className="back-button">← Volver</Link>

      <div className="detail-card">
        <img
          src={character.image}
          alt={character.name}
          className="detail-image"
        />

        <div className="detail-info">
          <h1 className="detail-name">{character.name}</h1>

          <div className="detail-attributes">
            <p><strong>Especie:</strong> {character.species}</p>
            <p><strong>Estado:</strong> {character.status}</p>
            <p><strong>Género:</strong> {character.gender}</p>
            <p><strong>Tipo:</strong> {character.type || 'N/A'}</p>
            <p><strong>Origen:</strong> {character.origin.name}</p>
            <p><strong>Ubicación actual:</strong> {character.location.name}</p>
            <p><strong>Episodios:</strong> {character.episode.length}</p>
            <p><strong>Creado:</strong> {new Date(character.created).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail
