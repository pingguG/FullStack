//src/pages/HomePage.jsx

import "./homePage.css";
import Header from "../components/header/Header";
import Nav from "../components/nav/nav";
import Section01 from "../components/HomeSection/section01";

export default function HomePage() {
  return (
    <div className="homePage-container">
      <Nav />
      <Header />
      <div className="homePage-main">
        <Section01 />
      </div>
    </div>
  );
}
