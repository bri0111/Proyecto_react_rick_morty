import { useState } from 'react'
import { Link } from 'react-router-dom'

function CharacterCard({ character }) {
  const [imageError, setImageError] = useState(false)

  return (
    <Link to={`/character/${character.id}`} className="character-card-link">
      <article className="character-card">
        {imageError ? (
          <div className="character-image-placeholder">
            <span>🛸</span>
            <p>Sin imagen</p>
          </div>
        ) : (
          <img
            src={character.image}
            alt={character.name}
            className="character-image"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        )}
        <div className="character-info">
          <h2 className="character-name">{character.name}</h2>
          <p><strong>Especie:</strong> {character.species}</p>
          <p><strong>Estado:</strong> {character.status}</p>
          <p><strong>Género:</strong> {character.gender}</p>
          <p><strong>Origen:</strong> {character.origin.name}</p>
          <p><strong>Ubicación:</strong> {character.location.name}</p>
        </div>
      </article>
    </Link>
  )
}

export default CharacterCard
