import { Outlet } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer/Footer";
import HeroHeader from "./components/heroHeader/HeroHeader";
import FilterPanel from "./components/filterPanel/FilterPanel";

function App() {
  return (
    <>
      <HeroHeader />
      <FilterPanel />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
