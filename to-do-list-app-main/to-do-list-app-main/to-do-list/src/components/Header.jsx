import "../style/Header.css";

const today = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  month: "long",
  day: "numeric",
});

export default function Header() {
  return (
    <header className="app-header">
      <h1 className="app-header-title">My Tasks</h1>
      <p className="app-header-date">{today}</p>
    </header>
  );
}
