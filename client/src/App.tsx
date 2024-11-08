import { Outlet } from "react-router-dom";

import "./App.css";
import HeroHeader from "./components/heroHeader/HeroHeader";

function App() {
  return (
    <>
      <HeroHeader />
      <main>
        <Outlet />
      </main>
      <footer> </footer>
    </>
  );
}

export default App;
