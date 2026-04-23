export default function UserCard({ user }) {
  if (!user) return <p>Loading...</p>;

  if (user.message === "Not Found") {
    return <p>User not found</p>;
  }

  return (
    <div className="bg-slate-800 p-4 rounded text-center">
      <img
        src={user.avatar_url}
        alt="avatar"
        className="w-20 h-20 rounded-full mx-auto"
      />
      <h2 className="text-lg font-semibold mt-2">{user.name}</h2>
      <p>@{user.login}</p>
      <p>{user.location}</p>
      <p>{user.followers} followers</p>
    </div>
  );
}