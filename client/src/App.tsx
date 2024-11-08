import { Outlet } from "react-router-dom";

import "./App.css";
import HeroHeader from "./components/heroHeader/HeroHeader";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <HeroHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
