import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import HeroHeader from "./components/heroHeader/HeroHeader";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroHeader />

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
