//src/pages/HomePage.jsx

import "./homePage.css";
import Header from "../components/header/Header";
import Nav from "../components/nav/nav";

export default function HomePage() {
  return (
    <div className="homePage-container">
      <Nav />
      <Header />
    </div>
  );
}
