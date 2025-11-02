import "./nav.css";

export default function Nav() {
  return (
    <nav className="main-nav">
      <a href="/" className="logo">
        My Brand Logo
      </a>

      <a href="/login" className="user-link">
        Login / Register
      </a>
    </nav>
  );
}
