import React from "react";
import "./components/Contact.css";
import Contact from "./components/Contact";
import data from "./components/data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Contact {...data} />
    </div>
  );
}

export default App;
