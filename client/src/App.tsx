import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <h1>JE SUIS UNE NAVBAR</h1>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>JE SUIS UN FOOTER</h2>
      </footer>
    </>
  );
}

export default App;
