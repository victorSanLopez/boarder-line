import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <nav> </nav>
      <main>
        <Outlet />
      </main>
      <footer> </footer>
    </>
  );
}

export default App;
