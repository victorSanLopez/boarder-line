import { Outlet } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <header> </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
