import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <span>Aviv Adgah</span>
        <span>© {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
}
