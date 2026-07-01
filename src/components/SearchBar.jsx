function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}
export default SearchBar;
