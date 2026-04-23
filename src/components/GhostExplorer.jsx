import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import StatusIndicator from "./StatusIndicator";

export default function GhostExplorer() {
  const [username, setUsername] = useState("octocat");
  const [user, setUser] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Online/offline tracking
  useEffect(() => {
    const handleStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener("online", handleStatus);
    window.addEventListener("offline", handleStatus);

    return () => {
      window.removeEventListener("online", handleStatus);
      window.removeEventListener("offline", handleStatus);
    };
  }, []);

  // Fetch GitHub user
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}`,
          { signal: controller.signal }
        );

        const data = await res.json();
        setUser(data);

        if (data.name) {
          document.title = `Viewing: ${data.name}`;
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
      document.title = "GitHub Explorer";
    };
  }, [username]);

  return (
    <div className="bg-slate-950 text-slate-100 flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-xl font-bold">Ghost Explorer</h1>

      <StatusIndicator isOnline={isOnline} />

      <SearchBar username={username} setUsername={setUsername} />

      <UserCard user={user} />
    </div>
  );
}