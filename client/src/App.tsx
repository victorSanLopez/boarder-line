import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import HeroHeader from "./components/heroHeader/HeroHeader";

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
