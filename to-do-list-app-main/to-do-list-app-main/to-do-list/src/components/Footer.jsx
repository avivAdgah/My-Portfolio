import "../style/Footer.css";

export default function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Aviv Adgah. All rights reserved.</p>
    </footer>
  );
}
