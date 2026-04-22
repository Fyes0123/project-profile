export default function StatusIndicator({ isOnline }) {
  return (
    <p>
      Status:{" "}
      <span className={isOnline ? "text-green-400" : "text-red-400"}>
        {isOnline ? "Online" : "Offline"}
      </span>
    </p>
  );
}