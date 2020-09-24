import React from "react";
import "./styles.css";

const data = ["sahil", "ramiza", "shah"];
export default function App() {
  const [myname, mylover, surname] = data;
  return (
    <div className="App">
      <h1>{mylover}</h1>
      <h2>sahil</h2>
    </div>
  );
}
