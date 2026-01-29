import { useState } from "react";
import "./App.css";
import "./assets/components/sidebar.jsx"
import Sidebar from "./assets/components/sidebar.jsx";
import Maincontent from "./assets/components/maincontent.jsx";

function App() {
  return (
    <main>
      <Sidebar/>
      <Maincontent/>
    </main>
  );
}

export default App;
