import React from "react";
import "./styles.css";
const api = {
  key: "249ca0e85bc5aac79e085bccf9ff8793",
  base: "https://api.openweathermap.org/data/2.5/"
};
export default function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}
