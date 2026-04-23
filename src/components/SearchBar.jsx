export default function SearchBar({ username, setUsername }) {
  return (
    <input
      className="p-2 rounded bg-slate-800 text-white"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Enter GitHub username"
    />
  );
}