function Filters({ status, species, onStatusChange, onSpeciesChange }) {
  return (
    <div className="filters">
      <select value={status} onChange={(e) => onStatusChange(e.target.value)}>
        <option value="">Estado: Todos</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select value={species} onChange={(e) => onSpeciesChange(e.target.value)}>
        <option value="">Especie: Todas</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
        <option value="humanoid">Humanoid</option>
        <option value="animal">Animal</option>
        <option value="robot">Robot</option>
        <option value="mythological">Mythological</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  )
}

export default Filters
