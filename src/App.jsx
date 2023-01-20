import Contact from "./component/contact/Contact";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
import Testimonials from "./component/testimonials/Testimonials";
import Topbar from "./component/topbar/Topbar";
import Works from "./component/works/Works";
import './app.css'
import { useState } from "react";
import Menu from "./component/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
