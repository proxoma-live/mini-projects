import "./App.css";
import user from "./user.json";
import UserCard from "./components/UserCard";
import UserCardClass from "./components/UserCardClass";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <UserCard {...user} />
      <UserCardClass {...user} />
    </div>
  );
}

export default App;
