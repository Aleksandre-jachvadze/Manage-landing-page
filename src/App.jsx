import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import WhatTheySaid from "./components/what-they-said/WhatTheySaid";
import WhatsDifferent from "./components/whats-different/WhatsDifferent";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatsDifferent />
      <WhatTheySaid />
      <Footer />
    </>
  );
}

export default App;
