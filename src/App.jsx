import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import CharacterCard from './components/CharacterCard'
import SearchBar from './components/SearchBar'
import Filters from './components/Filters'
import CharacterDetail from './components/CharacterDetail'
import './App.css'

function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')

  useEffect(() => {
    setLoading(true)
    setError(null)

    const params = new URLSearchParams()
    if (name) params.append('name', name)
    if (status) params.append('status', status)
    if (species) params.append('species', species)

    const url = `https://rickandmortyapi.com/api/character/?${params.toString()}`

    const timer = setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            if (res.status === 404) throw new Error('Sin resultados')
            throw new Error('Error al cargar personajes')
          }
          return res.json()
        })
        .then((data) => {
          setCharacters(data.results)
          setLoading(false)
        })
        .catch((err) => {
          setError(err.message)
          setCharacters([])
          setLoading(false)
        })
    }, 400)

    return () => clearTimeout(timer)
  }, [name, status, species])

  return (
    <div className="app">
      <h1 className="title">Rick and Morty</h1>
      <p className="subtitle">
        {loading ? 'Buscando...' : `Total: ${characters.length} personajes`}
      </p>

      <SearchBar value={name} onChange={setName} />
      <Filters
        status={status}
        species={species}
        onStatusChange={setStatus}
        onSpeciesChange={setSpecies}
      />

      {loading && <p className="message">Cargando personajes...</p>}

      {error && !loading && (
        <p className="message error">⚠️ {error}</p>
      )}

      {!loading && !error && (
        <div className="characters-grid">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharacterList />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
    </Routes>
  )
}

export default App
